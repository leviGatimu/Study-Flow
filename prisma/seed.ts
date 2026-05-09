import { PrismaClient } from '../lib/generated/prisma_v7';

const prisma = new PrismaClient();

async function main() {
  console.log('Cleaning up existing data...');
  await prisma.task.deleteMany();
  await prisma.scheduleTemplate.deleteMany();

  const templates = [
    // Monday (1)
    { dayOfWeek: 1, subject: 'Networking', startTime: '20:00', endTime: '20:30', deadlineDay: 'Monday', type: 'HOMEWORK' },
    { dayOfWeek: 1, subject: 'Javascript', startTime: '20:30', endTime: '21:30', deadlineDay: 'Monday', type: 'HOMEWORK' },
    { dayOfWeek: 1, subject: 'Embedded system', startTime: '20:00', endTime: '20:30', deadlineDay: 'Tuesday', type: 'HOMEWORK' },
    // Tuesday (2)
    { dayOfWeek: 2, subject: 'PHP', startTime: '20:00', endTime: '21:30', deadlineDay: 'Wednesday', type: 'HOMEWORK' },
    { dayOfWeek: 2, subject: 'Entrepreneurship', startTime: '21:30', endTime: '22:00', deadlineDay: 'Tuesday', type: 'HOMEWORK' },
    { dayOfWeek: 2, subject: 'English', startTime: '22:00', endTime: '23:30', deadlineDay: 'Tuesday', type: 'HOMEWORK' },
    // Wednesday (3)
    { dayOfWeek: 3, subject: 'Physics', startTime: '19:00', endTime: '21:30', deadlineDay: 'Friday', type: 'HOMEWORK' },
    { dayOfWeek: 3, subject: 'Database', startTime: '21:30', endTime: '22:30', deadlineDay: 'Thursday', type: 'HOMEWORK' },
    { dayOfWeek: 3, subject: 'C programming', startTime: '22:30', endTime: '23:30', deadlineDay: 'Thursday', type: 'HOMEWORK' },
    // Thursday (4)
    { dayOfWeek: 4, subject: 'Math', startTime: '19:00', endTime: '21:30', deadlineDay: 'Sunday', type: 'HOMEWORK' },
    { dayOfWeek: 4, subject: 'Web UI', startTime: '21:30', endTime: '22:30', deadlineDay: 'Thursday', type: 'HOMEWORK' },
    { dayOfWeek: 4, subject: 'Physics', startTime: '22:30', endTime: '00:00', deadlineDay: 'Thursday', type: 'HOMEWORK' },
    // Friday (5)
    { dayOfWeek: 5, subject: 'Math (revision)', startTime: '20:00', endTime: '21:30', deadlineDay: 'Friday', type: 'REVISION' },
    { dayOfWeek: 5, subject: "C' (revision)", startTime: '21:30', endTime: '22:30', deadlineDay: 'Friday', type: 'REVISION' },
    { dayOfWeek: 5, subject: "Physics' (Revision)", startTime: '22:30', endTime: '00:00', deadlineDay: 'Friday', type: 'REVISION' },
    // Saturday (6)
    { dayOfWeek: 6, subject: "Javascript' (revision)", startTime: '18:00', endTime: '20:30', deadlineDay: 'Saturday', type: 'REVISION' },
    { dayOfWeek: 6, subject: "Physics' (revision)", startTime: '20:30', endTime: '22:00', deadlineDay: 'Saturday', type: 'REVISION' },
    // Sunday (0)
    { dayOfWeek: 0, subject: "Embedded system' (revision)", startTime: '19:00', endTime: '20:30', deadlineDay: 'Sunday', type: 'REVISION' },
    { dayOfWeek: 0, subject: "PHP' (revision)", startTime: '20:30', endTime: '22:00', deadlineDay: 'Sunday', type: 'REVISION' },
  ];

  console.log('Seeding templates...');
  for (const template of templates) {
    await prisma.scheduleTemplate.create({
      data: template,
    });
  }

  console.log('Syncing schedule...');
  // We'll let the application generate the tasks upon visit to ensure logic is used,
  // but we cleared the tasks above to force a fresh start.

  console.log('Seed completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });