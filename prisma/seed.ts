import { PrismaClient } from '../lib/generated/prisma_v12';

const prisma = new PrismaClient();

async function main() {
  console.log('Syncing schedule templates (preserving existing data)...');

  const templates = [
    { dayOfWeek: 1, subject: 'Networking', startTime: '20:00', endTime: '20:30', deadlineDay: 'Monday', type: 'HOMEWORK' },
    { dayOfWeek: 1, subject: 'Javascript', startTime: '20:30', endTime: '21:30', deadlineDay: 'Monday', type: 'HOMEWORK' },
    { dayOfWeek: 1, subject: 'Embedded system', startTime: '20:00', endTime: '20:30', deadlineDay: 'Tuesday', type: 'HOMEWORK' },
    { dayOfWeek: 2, subject: 'PHP', startTime: '20:00', endTime: '21:30', deadlineDay: 'Wednesday', type: 'HOMEWORK' },
    { dayOfWeek: 2, subject: 'Entrepreneurship', startTime: '21:30', endTime: '22:00', deadlineDay: 'Tuesday', type: 'HOMEWORK' },
    { dayOfWeek: 2, subject: 'English', startTime: '22:00', endTime: '23:30', deadlineDay: 'Tuesday', type: 'HOMEWORK' },
    { dayOfWeek: 3, subject: 'Physics', startTime: '19:00', endTime: '21:30', deadlineDay: 'Friday', type: 'HOMEWORK' },
    { dayOfWeek: 3, subject: 'Database', startTime: '21:30', endTime: '22:30', deadlineDay: 'Thursday', type: 'HOMEWORK' },
    { dayOfWeek: 3, subject: 'C programming', startTime: '22:30', endTime: '23:30', deadlineDay: 'Thursday', type: 'HOMEWORK' },
    { dayOfWeek: 4, subject: 'Math', startTime: '19:00', endTime: '21:30', deadlineDay: 'Sunday', type: 'HOMEWORK' },
    { dayOfWeek: 4, subject: 'Web UI', startTime: '21:30', endTime: '22:30', deadlineDay: 'Thursday', type: 'HOMEWORK' },
    { dayOfWeek: 4, subject: 'Physics', startTime: '22:30', endTime: '00:00', deadlineDay: 'Thursday', type: 'HOMEWORK' },
    { dayOfWeek: 5, subject: 'Math (revision)', startTime: '20:00', endTime: '21:30', deadlineDay: 'Friday', type: 'REVISION' },
    { dayOfWeek: 5, subject: "C' (revision)", startTime: '21:30', endTime: '22:30', deadlineDay: 'Friday', type: 'REVISION' },
    { dayOfWeek: 5, subject: "Physics' (Revision)", startTime: '22:30', endTime: '00:00', deadlineDay: 'Friday', type: 'REVISION' },
    { dayOfWeek: 6, subject: "Javascript' (revision)", startTime: '18:00', endTime: '20:30', deadlineDay: 'Saturday', type: 'REVISION' },
    { dayOfWeek: 6, subject: "Physics' (revision)", startTime: '20:30', endTime: '22:00', deadlineDay: 'Saturday', type: 'REVISION' },
    { dayOfWeek: 0, subject: "Embedded system' (revision)", startTime: '19:00', endTime: '20:30', deadlineDay: 'Sunday', type: 'REVISION' },
    { dayOfWeek: 0, subject: "PHP' (revision)", startTime: '20:30', endTime: '22:00', deadlineDay: 'Sunday', type: 'REVISION' },
  ];

  for (const template of templates) {
    // Check if a template for this specific time/day/subject already exists
    const exists = await prisma.scheduleTemplate.findFirst({
      where: {
        dayOfWeek: template.dayOfWeek,
        subject: template.subject,
        startTime: template.startTime
      }
    });

    if (!exists) {
      await prisma.scheduleTemplate.create({ data: template });
      console.log(`+ Added missing template: ${template.subject} (${template.startTime})`);
    }
  }

  console.log('Seed/Sync completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });