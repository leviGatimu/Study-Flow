import { getAllTasks, getMarkedDays } from '@/lib/actions';
import { CalendarGrid } from '@/components/CalendarGrid';

export default async function CalendarPage() {
  const tasks = await getAllTasks();
  const markedDays = await getMarkedDays();

  return (
    <div className="space-y-6 flex flex-col animate-in fade-in duration-500 max-w-[1600px] mx-auto h-full">
      <div className="pt-2 pb-2 border-b border-border/40 shrink-0">
        <h1 className="text-4xl font-heading font-black tracking-tight text-foreground">Calendar</h1>
        <p className="text-lg text-muted-foreground font-semibold mt-1">
          Overview of your study blocks and deadlines.
        </p>
      </div>
      
      <div className="flex-1 min-h-0 animate-in slide-in-from-bottom-4 duration-500 overflow-hidden">
        <CalendarGrid tasks={tasks} markedDays={markedDays} />
      </div>
    </div>
  );
}
