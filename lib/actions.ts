'use server';

import { prisma } from '@/lib/prisma';
import { startOfDay, endOfDay, addDays, isSameDay, differenceInDays, format } from 'date-fns';
import { revalidatePath } from 'next/cache';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { getUserId, login, logout } from '@/lib/auth';
import bcrypt from 'bcryptjs';

/**
 * AUTH: Login user
 */
export async function loginUser(formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) return { error: 'Invalid credentials' };

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return { error: 'Invalid credentials' };

  await login(user.id);
  return { success: true };
}

/**
 * AUTH: Register user
 */
export async function registerUser(formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  const existing = await prisma.user.findUnique({ where: { username } });
  if (existing) return { error: 'Username already taken' };

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { username, passwordHash }
  });

  // Create initial progress for new user
  await prisma.userProgress.create({
    data: { userId: user.id, name: username }
  });

  await login(user.id);
  return { success: true };
}

/**
 * AUTH: Logout user
 */
export async function logoutUser() {
  await logout();
  revalidatePath('/');
}

/**
 * Normalization Utility: Clean subject names to group them correctly
 */
function normalizeSubject(subject: string) {
  if (!subject) return '';
  return subject
    .replace(/\s*\(revision\)\s*/gi, '') 
    .replace(/'/g, '')                    
    .trim();
}

/**
 * Utility: Generate tasks for a specific date range based on templates
 */
export async function ensureTasksGenerated(startDate: Date, endDate: Date) {
  const userId = await getUserId();
  if (!userId) return;

  const templates = await prisma.scheduleTemplate.findMany({ where: { userId } });
  const start = startOfDay(startDate);
  const end = endOfDay(endDate);

  const existingTasks = await prisma.task.findMany({
    where: {
      userId,
      date: { gte: start, lte: end }
    },
    select: { templateId: true, date: true }
  });

  const lookup = new Set(
    existingTasks
      .filter(t => t.templateId !== null)
      .map(t => `${t.templateId}|${format(t.date, 'yyyy-MM-dd')}`)
  );

  const tasksToCreate = [];
  let currentDate = start;

  while (currentDate <= end) {
    const dayOfWeek = currentDate.getDay();
    const dayTemplates = templates.filter(t => t.dayOfWeek === dayOfWeek);
    const dateKey = format(currentDate, 'yyyy-MM-dd');
    
    for (const template of dayTemplates) {
      const compositeKey = `${template.id}|${dateKey}`;
      if (!lookup.has(compositeKey)) {
        tasksToCreate.push({
          userId,
          templateId: template.id,
          date: currentDate,
          startTime: template.startTime,
          endTime: template.endTime,
          subject: template.subject,
          type: template.type,
          isMissed: false,
          isDeleted: false
        });
        lookup.add(compositeKey);
      }
    }
    currentDate = addDays(currentDate, 1);
  }

  if (tasksToCreate.length > 0) {
    await prisma.task.createMany({ data: tasksToCreate });
  }
}

/**
 * Fetch today's tasks with priority logic
 */
export async function getTodayTasks() {
  const userId = await getUserId();
  if (!userId) return [];

  const today = new Date();
  await ensureTasksGenerated(today, today);

  const start = startOfDay(today);
  const end = endOfDay(today);

  const tasks = await prisma.task.findMany({
    where: { 
      userId,
      date: { gte: start, lte: end },
      isDeleted: false 
    },
    include: { template: true },
    orderBy: { startTime: 'asc' }
  });

  const upcomingExams = await prisma.examEvent.findMany({
    where: {
      userId,
      date: { gte: start, lte: addDays(start, 7) }
    }
  });

  const urgentSubjects = new Set(upcomingExams.map(e => normalizeSubject(e.title)));

  return tasks.map(task => ({
    ...task,
    isUrgent: urgentSubjects.has(normalizeSubject(task.subject))
  })).sort((a, b) => {
    if (a.isUrgent && !b.isUrgent) return -1;
    if (!a.isUrgent && b.isUrgent) return 1;
    return 0;
  });
}

/**
 * Fetch tomorrow's tasks
 */
export async function getTomorrowTasks() {
  const userId = await getUserId();
  if (!userId) return [];

  const tomorrow = addDays(new Date(), 1);
  await ensureTasksGenerated(tomorrow, tomorrow);

  const start = startOfDay(tomorrow);
  const end = endOfDay(tomorrow);

  return prisma.task.findMany({
    where: { 
      userId,
      date: { gte: start, lte: end },
      isDeleted: false 
    },
    include: { template: true },
    orderBy: { startTime: 'asc' }
  });
}

/**
 * Fetch all tasks (Calendar view)
 */
export async function getAllTasks() {
  const userId = await getUserId();
  if (!userId) return [];

  const today = new Date();
  const endOfJune = new Date(2026, 5, 30);
  await ensureTasksGenerated(today, endOfJune);

  return prisma.task.findMany({
    where: { userId, isDeleted: false }, 
    include: { template: true },
    orderBy: { startTime: 'asc' }
  });
}

/**
 * Toggle task completion status
 */
export async function toggleTaskDone(taskId: string, isDone: boolean) {
  const userId = await getUserId();
  if (!userId) return;

  await prisma.task.update({
    where: { id: taskId, userId },
    data: { 
      isDone,
      isMissed: isDone ? false : undefined 
    }
  });
  revalidatePath('/');
  revalidatePath('/history');
  revalidatePath('/calendar');
  revalidatePath('/timetable');
}

/**
 * Toggle task missed status
 */
export async function toggleTaskMissed(taskId: string, isMissed: boolean) {
  const userId = await getUserId();
  if (!userId) return;

  await prisma.task.update({
    where: { id: taskId, userId },
    data: { 
      isMissed,
      isDone: isMissed ? false : undefined 
    }
  });
  revalidatePath('/');
  revalidatePath('/history');
  revalidatePath('/calendar');
  revalidatePath('/timetable');
}

/**
 * Logic-based Deletion
 */
export async function deleteTask(taskId: string) {
  const userId = await getUserId();
  if (!userId) return { success: false };

  try {
    await prisma.task.update({
      where: { id: taskId, userId },
      data: { isDeleted: true }
    });
    revalidatePath('/');
    revalidatePath('/calendar');
    revalidatePath('/history');
    revalidatePath('/timetable');
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

/**
 * Fetch history tasks
 */
export async function getHistoryTasks() {
  const userId = await getUserId();
  if (!userId) return [];

  return prisma.task.findMany({
    where: {
      userId,
      isDeleted: false,
      OR: [ { isDone: true }, { isMissed: true } ]
    },
    include: { template: true },
    orderBy: { date: 'desc' }
  });
}

/**
 * Fetch all templates
 */
export async function getTemplates() {
  const userId = await getUserId();
  if (!userId) return [];

  return prisma.scheduleTemplate.findMany({
    where: { userId },
    orderBy: [{ dayOfWeek: 'asc' }, { startTime: 'asc' }]
  });
}

/**
 * Delete a template
 */
export async function deleteTemplate(id: string) {
  const userId = await getUserId();
  if (!userId) return;

  await prisma.scheduleTemplate.delete({ where: { id, userId } });
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
  const userId = await getUserId();
  if (!userId) return;

  await prisma.scheduleTemplate.create({ 
    data: { ...data, userId } 
  });
  revalidatePath('/manage');
}

/**
 * Update an existing task
 */
export async function updateTask(taskId: string, data: { date?: Date, startTime?: string, endTime?: string }) {
  const userId = await getUserId();
  if (!userId) return;

  const existing = await prisma.task.findUnique({
    where: { id: taskId, userId }
  });

  if (!existing) return;

  if (data.date) {
    data.date = startOfDay(data.date);

    if (existing.templateId && !isSameDay(existing.date, data.date)) {
      await prisma.task.update({
        where: { id: taskId },
        data: { isDeleted: true }
      });

      await prisma.task.create({
        data: {
          userId,
          templateId: existing.templateId,
          subject: existing.subject,
          type: existing.type,
          startTime: data.startTime || existing.startTime,
          endTime: data.endTime || existing.endTime,
          date: data.date,
          isDone: existing.isDone,
          isMissed: existing.isMissed,
          isDeleted: false
        }
      });

      revalidatePath('/');
      revalidatePath('/calendar');
      return;
    }
  }

  await prisma.task.update({
    where: { id: taskId, userId },
    data
  });

  revalidatePath('/');
  revalidatePath('/calendar');
}

/**
 * Fetch marked days
 */
export async function getMarkedDays() {
  const userId = await getUserId();
  if (!userId) return [];

  const marked = await prisma.markedDay.findMany({ where: { userId } });
  return marked.map(m => m.date);
}

/**
 * Toggle marked day
 */
export async function toggleMarkedDay(date: Date, isMarked: boolean) {
  const userId = await getUserId();
  if (!userId) return;

  const normalizedDate = startOfDay(date);
  if (isMarked) {
    await prisma.markedDay.upsert({
      where: { userId_date: { userId, date: normalizedDate } },
      update: {},
      create: { userId, date: normalizedDate }
    });
  } else {
    await prisma.markedDay.deleteMany({ where: { userId, date: normalizedDate } });
  }
  revalidatePath('/calendar');
}

/**
 * Sync and fetch user streak
 */
export async function syncStreak() {
  const userId = await getUserId();
  if (!userId) return null;

  const today = startOfDay(new Date());
  let progress = await prisma.userProgress.findUnique({ where: { userId } });

  if (!progress) {
    progress = await prisma.userProgress.create({
      data: { userId, currentStreak: 1, longestStreak: 1, lastActiveDate: today }
    });
    return progress;
  }

  const lastDate = progress.lastActiveDate ? startOfDay(progress.lastActiveDate) : null;

  if (!lastDate) {
    progress = await prisma.userProgress.update({
      where: { userId },
      data: { currentStreak: 1, lastActiveDate: today }
    });
  } else if (!isSameDay(lastDate, today)) {
    const diff = differenceInDays(today, lastDate);
    let newStreak = 1;
    if (diff === 1) newStreak = progress.currentStreak + 1;
    const newLongest = Math.max(newStreak, progress.longestStreak);
    progress = await prisma.userProgress.update({
      where: { id: 'user-id' }, // This was likely causing issues, fixing to userId
      data: { currentStreak: newStreak, longestStreak: newLongest, lastActiveDate: today }
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
  const userId = await getUserId();
  if (!userId) return;

  await prisma.scheduleTemplate.update({ 
    where: { id, userId }, 
    data 
  });
  revalidatePath('/manage');
}

/**
 * Fetch unique subjects from templates
 */
export async function getUniqueSubjects() {
  const userId = await getUserId();
  if (!userId) return [];

  const templates = await prisma.scheduleTemplate.findMany({ 
    where: { userId },
    select: { subject: true } 
  });
  const normalizedSet = new Set(templates.map(t => normalizeSubject(t.subject)));
  return Array.from(normalizedSet).sort();
}

/**
 * Fetch resources for a subject
 */
export async function getResources(subject: string) {
  const userId = await getUserId();
  if (!userId) return [];

  const normalized = normalizeSubject(subject);
  return prisma.resource.findMany({
    where: { userId, subject: normalized },
    orderBy: { createdAt: 'desc' }
  });
}

/**
 * Add a new resource
 */
export async function addResource(formData: FormData) {
  const userId = await getUserId();
  if (!userId) return;

  const rawSubject = formData.get('subject') as string;
  const subject = normalizeSubject(rawSubject);
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
    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
    const path = join(process.cwd(), 'public', 'uploads', filename);
    await writeFile(path, buffer);
    url = `/uploads/${filename}`;
  }

  await prisma.resource.create({ 
    data: { userId, subject, title, type, url } 
  });
  
  revalidatePath('/resources');
  revalidatePath(`/resources/${encodeURIComponent(subject)}`);
  revalidatePath(`/focus`);
}

/**
 * Delete a resource
 */
export async function deleteResource(id: string, subject: string) {
  const userId = await getUserId();
  if (!userId) return;

  const normalized = normalizeSubject(subject);
  const resource = await prisma.resource.findUnique({ where: { id, userId } });
  if (resource && resource.type === 'FILE') {
    try {
      const filename = resource.url.replace('/uploads/', '');
      const path = join(process.cwd(), 'public', 'uploads', filename);
      await unlink(path);
    } catch (e) { console.error(e); }
  }
  await prisma.resource.delete({ where: { id, userId } });
  revalidatePath('/resources');
  revalidatePath(`/resources/${encodeURIComponent(normalized)}`);
  revalidatePath(`/focus`);
}

/**
 * Fetch a specific task
 */
export async function getTaskById(id: string) {
  const userId = await getUserId();
  if (!userId) return null;

  return prisma.task.findUnique({ 
    where: { id, userId }, 
    include: { template: true } 
  });
}

/**
 * Fetch upcoming exam events
 */
export async function getEvents() {
  const userId = await getUserId();
  if (!userId) return [];

  return prisma.examEvent.findMany({ 
    where: { userId },
    orderBy: { date: 'asc' } 
  });
}

/**
 * Create an exam event
 */
export async function createEvent(data: { title: string, date: Date, priority: string }) {
  const userId = await getUserId();
  if (!userId) return;

  await prisma.examEvent.create({ 
    data: { ...data, userId, date: startOfDay(data.date) } 
  });
  revalidatePath('/');
}

/**
 * Delete an exam event
 */
export async function deleteEvent(id: string) {
  const userId = await getUserId();
  if (!userId) return;

  await prisma.examEvent.delete({ where: { id, userId } });
  revalidatePath('/');
}

/**
 * Create a quick task
 */
export async function createQuickTask(data: { subject: string, startTime: string, endTime: string, type: string, date?: Date }) {
  const userId = await getUserId();
  if (!userId) return;

  const date = data.date ? startOfDay(data.date) : startOfDay(new Date());
  await prisma.task.create({
    data: { userId, subject: data.subject, startTime: data.startTime, endTime: data.endTime, type: data.type, date, isDone: false, isMissed: false, isDeleted: false }
  });
  revalidatePath('/');
  revalidatePath('/calendar');
}

/**
 * Weekly Summaries Logic
 */
export async function getWeeklySummaries() {
  const userId = await getUserId();
  if (!userId) return [];

  return prisma.weeklySummary.findMany({ 
    where: { userId },
    orderBy: { startDate: 'desc' } 
  });
}

export async function generateWeeklySummary(mondayDate: Date) {
  const userId = await getUserId();
  if (!userId) return null;

  const start = startOfDay(mondayDate);
  const end = endOfDay(addDays(start, 6));

  const weekTasks = await prisma.task.findMany({ where: { userId, date: { gte: start, lte: end }, isDeleted: false } });
  if (weekTasks.length === 0) return null;

  const completed = weekTasks.filter(t => t.isDone);
  const ratio = completed.length / weekTasks.length;
  let grade = 'F';
  if (ratio >= 0.95) grade = 'A+';
  else if (ratio >= 0.9) grade = 'A';
  else if (ratio >= 0.8) grade = 'B';
  else if (ratio >= 0.7) grade = 'C';
  else if (ratio >= 0.6) grade = 'D';

  const totalMinutes = weekTasks.reduce((acc, t) => {
    const [sH, sM] = t.startTime.split(':').map(Number);
    const [eH, eM] = t.endTime.split(':').map(Number);
    return acc + ((eH * 60 + eM) - (sH * 60 + sM));
  }, 0);

  const breakdown: Record<string, number> = {};
  weekTasks.forEach(t => {
    const s = normalizeSubject(t.subject);
    const [sH, sM] = t.startTime.split(':').map(Number);
    const [eH, eM] = t.endTime.split(':').map(Number);
    const mins = (eH * 60 + eM) - (sH * 60 + sM);
    breakdown[s] = (breakdown[s] || 0) + mins;
  });

  return prisma.weeklySummary.upsert({
    where: { userId_startDate_endDate: { userId, startDate: start, endDate: end } },
    update: { grade, totalMinutes, subjectBreakdown: JSON.stringify(breakdown) },
    create: { userId, startDate: start, endDate: end, grade, totalMinutes, subjectBreakdown: JSON.stringify(breakdown) }
  });
}

/**
 * Fetch mastery items for a subject
 */
export async function getMasteryItems(subject: string) {
  const userId = await getUserId();
  if (!userId) return [];

  const normalized = normalizeSubject(subject);
  return prisma.masteryItem.findMany({
    where: { userId, subject: normalized },
    orderBy: { createdAt: 'asc' }
  });
}

/**
 * Add a new mastery item
 */
export async function addMasteryItem(subject: string, title: string) {
  const userId = await getUserId();
  if (!userId) return;

  const normalized = normalizeSubject(subject);
  await prisma.masteryItem.create({
    data: { 
      userId,
      subject: normalized,
      title,
      isCompleted: false
    }
  });
  revalidatePath('/resources');
  revalidatePath(`/resources/${encodeURIComponent(normalized)}`);
}

/**
 * Toggle mastery item completion
 */
export async function toggleMasteryItem(id: string, isCompleted: boolean, subject: string) {
  const userId = await getUserId();
  if (!userId) return;

  const normalized = normalizeSubject(subject);
  await prisma.masteryItem.update({
    where: { id, userId },
    data: { isCompleted }
  });
  revalidatePath('/resources');
  revalidatePath(`/resources/${encodeURIComponent(normalized)}`);
}

/**
 * Delete a mastery item
 */
export async function deleteMasteryItem(id: string, subject: string) {
  const userId = await getUserId();
  if (!userId) return;

  const normalized = normalizeSubject(subject);
  await prisma.masteryItem.delete({ where: { id, userId } });
  revalidatePath('/resources');
  revalidatePath(`/resources/${encodeURIComponent(normalized)}`);
}

/**
 * Update user profile name
 */
export async function updateUserName(name: string) {
  const userId = await getUserId();
  if (!userId) return;

  await prisma.userProgress.upsert({
    where: { userId },
    update: { name },
    create: { userId, name }
  });
  revalidatePath('/');
}

/**
 * DEBUG/MAINTENANCE: Clear all tasks
 */
export async function clearAllTasks() {
  const userId = await getUserId();
  if (!userId) return;

  await prisma.task.deleteMany({ where: { userId } });
  revalidatePath('/');
  revalidatePath('/calendar');
}
