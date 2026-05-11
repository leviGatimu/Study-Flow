import { getTaskById, getResources } from '@/lib/actions';
import { FocusSessionUI } from '@/components/FocusSessionUI';
import { notFound } from 'next/navigation';

export default async function FocusPage({ params }: { params: Promise<{ taskId: string }> }) {
  const resolvedParams = await params;
  let task;
  
  if (resolvedParams.taskId === 'free') {
    task = {
      id: 'free',
      subject: 'Custom Focus',
      startTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
      endTime: new Date(Date.now() + 60 * 60 * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
      type: 'FREE'
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
