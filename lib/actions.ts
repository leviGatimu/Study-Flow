'use server';

import { prisma } from '@/lib/prisma';
import { startOfDay, endOfDay, addDays, isSameDay, differenceInDays, format } from 'date-fns';
import { revalidatePath } from 'next/cache';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';

/**
 * Normalization Utility: Clean subject names to group them correctly
 * (e.g., "C (revision)" -> "C", "Physics'" -> "Physics")
 */
function normalizeSubject(subject: string) {
  return subject
    .replace(/\s*\(revision\)\s*/gi, '') // Remove (revision)
    .replace(/'/g, '')                    // Remove single quotes
    .trim();
}

/**
 * Utility: Generate tasks for a specific date range based on templates
 */
export async function ensureTasksGenerated(startDate: Date, endDate: Date) {
  const templates = await prisma.scheduleTemplate.findMany();
  const start = startOfDay(startDate);
  const end = endOfDay(endDate);

  // 1. Fetch ALL existing tasks in the range to build a reliable lookup map
  const existingTasks = await prisma.task.findMany({
    where: {
      date: {
        gte: start,
        lte: end
      }
    },
    select: {
      templateId: true,
      date: true
    }
  });

  // Create a Set of unique keys: "templateId|YYYY-MM-DD"
  const lookup = new Set(
    existingTasks
      .filter(t => t.templateId !== null)
      .map(t => `${t.templateId}|${format(t.date, 'yyyy-MM-dd')}`)
  );

  const tasksToCreate = [];
  
  // Iterate through each day in the range
  let currentDate = start;

  while (currentDate <= end) {
    const dayOfWeek = currentDate.getDay();
    const dayTemplates = templates.filter(t => t.dayOfWeek === dayOfWeek);
    const dateKey = format(currentDate, 'yyyy-MM-dd');
    
    for (const template of dayTemplates) {
      const compositeKey = `${template.id}|${dateKey}`;

      if (!lookup.has(compositeKey)) {
        tasksToCreate.push({
          templateId: template.id,
          date: currentDate,
          startTime: template.startTime,
          endTime: template.endTime,
          subject: template.subject,
          type: template.type
        });
        // Add to lookup immediately so we don't duplicate within the same run
        lookup.add(compositeKey);
      }
    }
    
    currentDate = addDays(currentDate, 1);
  }

  if (tasksToCreate.length > 0) {
    await prisma.task.createMany({
      data: tasksToCreate
    });
  }
}

/**
 * Fetch today's tasks
 */
export async function getTodayTasks() {
  const today = new Date();
  await ensureTasksGenerated(today, today);

  const start = startOfDay(today);
  const end = endOfDay(today);

  return prisma.task.findMany({
    where: {
      date: {
        gte: start,
        lte: end
      }
    },
    include: {
      template: true
    },
    orderBy: {
      startTime: 'asc'
    }
  });
}

/**
 * Fetch all tasks (Calendar view) - Generates until end of June 2026
 */
export async function getAllTasks() {
  const today = new Date();
  const endOfJune = new Date(2026, 5, 30);
  
  await ensureTasksGenerated(today, endOfJune);

  return prisma.task.findMany({
    include: { template: true },
    orderBy: { startTime: 'asc' }
  });
}

/**
 * Toggle task completion status
 */
export async function toggleTaskDone(taskId: string, isDone: boolean) {
  await prisma.task.update({
    where: { id: taskId },
    data: { isDone }
  });
  revalidatePath('/');
  revalidatePath('/history');
  revalidatePath('/calendar');
}

/**
 * Fetch completed tasks (History)
 */
export async function getCompletedTasks() {
  return prisma.task.findMany({
    where: { isDone: true },
    include: { template: true },
    orderBy: { date: 'desc' }
  });
}

/**
 * Fetch all templates
 */
export async function getTemplates() {
  return prisma.scheduleTemplate.findMany({
    orderBy: [
      { dayOfWeek: 'asc' },
      { startTime: 'asc' }
    ]
  });
}

/**
 * Delete a template
 */
export async function deleteTemplate(id: string) {
  await prisma.scheduleTemplate.delete({ where: { id } });
  revalidatePath('/manage');
}

/**
 * Create a new template
 */
export async function createTemplate(data: {
  dayOfWeek: number;
  subject: string;
  startTime: string;
  endTime: string;
  deadlineDay: string;
  type: string;
}) {
  await prisma.scheduleTemplate.create({ data });
  revalidatePath('/manage');
}

/**
 * Update an existing task (move day or change time)
 */
export async function updateTask(taskId: string, data: { date?: Date, startTime?: string, endTime?: string }) {
  if (data.date) {
    data.date = startOfDay(data.date);
  }
  await prisma.task.update({
    where: { id: taskId },
    data
  });
  revalidatePath('/');
  revalidatePath('/calendar');
}

/**
 * Fetch marked days
 */
export async function getMarkedDays() {
  const marked = await prisma.markedDay.findMany();
  return marked.map(m => m.date);
}

/**
 * Toggle marked day
 */
export async function toggleMarkedDay(date: Date, isMarked: boolean) {
  const normalizedDate = startOfDay(date);
  
  if (isMarked) {
    await prisma.markedDay.upsert({
      where: { date: normalizedDate },
      update: {},
      create: { date: normalizedDate }
    });
  } else {
    await prisma.markedDay.deleteMany({
      where: { date: normalizedDate }
    });
  }
  revalidatePath('/calendar');
}

/**
 * Sync and fetch user streak
 */
export async function syncStreak() {
  const today = startOfDay(new Date());
  
  let progress = await prisma.userProgress.findUnique({
    where: { id: 'user-id' }
  });

  if (!progress) {
    progress = await prisma.userProgress.create({
      data: {
        id: 'user-id',
        currentStreak: 1,
        longestStreak: 1,
        lastActiveDate: today
      }
    });
    return progress;
  }

  const lastDate = progress.lastActiveDate ? startOfDay(progress.lastActiveDate) : null;

  if (!lastDate) {
    progress = await prisma.userProgress.update({
      where: { id: 'user-id' },
      data: { currentStreak: 1, lastActiveDate: today }
    });
  } else if (isSameDay(lastDate, today)) {
    // Already synced today
  } else {
    const diff = differenceInDays(today, lastDate);
    
    let newStreak = 1;
    if (diff === 1) {
      newStreak = progress.currentStreak + 1;
    }

    const newLongest = Math.max(newStreak, progress.longestStreak);

    progress = await prisma.userProgress.update({
      where: { id: 'user-id' },
      data: {
        currentStreak: newStreak,
        longestStreak: newLongest,
        lastActiveDate: today
      }
    });
  }

  return progress;
}

/**
 * Update an existing template
 */
export async function updateTemplate(id: string, data: {
  dayOfWeek?: number;
  subject?: string;
  startTime?: string;
  endTime?: string;
  deadlineDay?: string;
  type?: string;
}) {
  await prisma.scheduleTemplate.update({
    where: { id },
    data
  });
  revalidatePath('/manage');
}

/**
 * Fetch unique subjects from templates (Normalized to group revisions)
 */
export async function getUniqueSubjects() {
  const templates = await prisma.scheduleTemplate.findMany({
    select: { subject: true }
  });
  
  // Normalize and deduplicate
  const normalizedSet = new Set(templates.map(t => normalizeSubject(t.subject)));
  
  return Array.from(normalizedSet).sort();
}

/**
 * Fetch resources for a subject (and its revisions)
 */
export async function getResources(subject: string) {
  // We need to fetch resources where subject matches or normalization matches
  // However, it's safer to store resources using the normalized name going forward.
  // For now, let's fetch by the provided subject (which will be normalized in the UI).
  return prisma.resource.findMany({
    where: { subject: normalizeSubject(subject) },
    orderBy: { createdAt: 'desc' }
  });
}

/**
 * Add a new resource (link or file)
 */
export async function addResource(formData: FormData) {
  const rawSubject = formData.get('subject') as string;
  const subject = normalizeSubject(rawSubject); // Always store normalized
  const title = formData.get('title') as string;
  const type = formData.get('type') as 'LINK' | 'FILE';
  
  let url = '';

  if (type === 'LINK') {
    url = formData.get('url') as string;
  } else {
    const file = formData.get('file') as File;
    if (!file) throw new Error('No file uploaded');

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a unique filename
    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
    const path = join(process.cwd(), 'public', 'uploads', filename);
    
    await writeFile(path, buffer);
    url = `/uploads/${filename}`;
  }

  await prisma.resource.create({
    data: { subject, title, type, url }
  });

  revalidatePath(`/resources/${encodeURIComponent(subject)}`);
  revalidatePath(`/focus`);
}

/**
 * Delete a resource
 */
export async function deleteResource(id: string, subject: string) {
  const resource = await prisma.resource.findUnique({ where: { id } });
  
  if (resource && resource.type === 'FILE') {
    // Try to delete local file
    try {
      const filename = resource.url.replace('/uploads/', '');
      const path = join(process.cwd(), 'public', 'uploads', filename);
      await unlink(path);
    } catch (e) {
      console.error('Failed to delete file from disk', e);
    }
  }

  await prisma.resource.delete({ where: { id } });
  revalidatePath(`/resources/${encodeURIComponent(subject)}`);
  revalidatePath(`/focus`);
}

/**
 * Fetch a specific task for focus mode
 */
export async function getTaskById(id: string) {
  return prisma.task.findUnique({
    where: { id },
    include: { template: true }
  });
}

/**
 * Fetch all upcoming exam events
 */
export async function getEvents() {
  return prisma.examEvent.findMany({
    orderBy: { date: 'asc' }
  });
}

/**
 * Create a new exam event
 */
export async function createEvent(data: { title: string, date: Date, priority: string }) {
  await prisma.examEvent.create({
    data: {
      ...data,
      date: startOfDay(data.date)
    }
  });
  revalidatePath('/');
}

/**
 * Delete an exam event
 */
export async function deleteEvent(id: string) {
  await prisma.examEvent.delete({ where: { id } });
  revalidatePath('/');
}

/**
 * Create a one-off task (Quick Add)
 */
export async function createQuickTask(data: {
  subject: string,
  startTime: string,
  endTime: string,
  type: string,
  date?: Date
}) {
  const date = data.date ? startOfDay(data.date) : startOfDay(new Date());
  
  await prisma.task.create({
    data: {
      subject: data.subject,
      startTime: data.startTime,
      endTime: data.endTime,
      type: data.type,
      date: date,
      isDone: false
    }
  });

  revalidatePath('/');
  revalidatePath('/calendar');
}

/**
 * DEBUG/MAINTENANCE: Clear all tasks to resolve duplicates
 */
export async function clearAllTasks() {
  await prisma.task.deleteMany();
  revalidatePath('/');
  revalidatePath('/calendar');
}
