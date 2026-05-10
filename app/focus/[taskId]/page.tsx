import { getTaskById, getResources } from '@/lib/actions';
import { FocusSessionUI } from '@/components/FocusSessionUI';
import { notFound } from 'next/navigation';

export default async function FocusPage({ params }: { params: { taskId: string } }) {
  const task = await getTaskById(params.taskId);
  
  if (!task) {
    notFound();
  }

  const resources = await getResources(task.subject);

  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-hidden">
      <FocusSessionUI task={task} resources={resources} />
    </div>
  );
}
