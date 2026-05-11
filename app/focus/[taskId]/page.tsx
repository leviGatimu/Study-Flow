import { getTaskById, getResources } from '@/lib/actions';
import { FocusSessionUI } from '@/components/FocusSessionUI';
import { notFound } from 'next/navigation';

export default async function FocusPage({ params }: { params: Promise<{ taskId: string }> }) {
  const resolvedParams = await params;
  let task;
  
  if (resolvedParams.taskId === 'free') {
    const now = new Date();
    const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);
    task = {
      id: 'free',
      userId: 'free',
      templateId: null,
      date: new Date(),
      startTime: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
      endTime: oneHourLater.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
      subject: 'Custom Focus',
      isDone: false,
      isMissed: false,
      isDeleted: false,
      type: 'FREE',
      template: null
    };
  } else {
    task = await getTaskById(resolvedParams.taskId);
  }
  
  if (!task) {
    notFound();
  }

  const resources = resolvedParams.taskId === 'free' ? [] : await getResources(task.subject);

  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-hidden">
      <FocusSessionUI task={task} resources={resources} />
    </div>
  );
}
