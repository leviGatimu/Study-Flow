import { getHistoryTasks, syncStreak } from '@/lib/actions';
import { HistoryCharts } from '@/components/HistoryCharts';
import { format } from 'date-fns';
import { CheckCircle2, BookOpen, Repeat, Trophy, XCircle, Zap, Clock } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function HistoryPage() {
  const tasks = await getHistoryTasks();
  const userProgress = await syncStreak();

  const totalActioned = tasks.length;
  const homeworks = tasks.filter(t => t.isDone && t.type === 'HOMEWORK').length;
  const revisions = tasks.filter(t => t.isDone && t.type === 'REVISION').length;
  const missedCount = tasks.filter(t => t.isMissed).length;

  const totalMinutes = userProgress?.totalFocusMinutes || 0;
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const timeStudied = hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;

  return (
    <div className="space-y-12 max-w-[1600px] mx-auto animate-in fade-in duration-500 pb-16">
      <div className="pt-6 pb-2 border-b border-border/40">
        <h1 className="text-5xl font-heading font-black tracking-tight text-foreground">Activity Analytics</h1>
        <p className="text-xl text-muted-foreground font-semibold mt-3">
          Track your progress and celebrate your consistency.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <StatCard 
          label="Homeworks Done" 
          value={homeworks} 
          icon={<BookOpen className="w-6 h-6 text-blue-500" />} 
          description="Assignments completed"
        />
        <StatCard 
          label="Revisions Done" 
          value={revisions} 
          icon={<Repeat className="w-6 h-6 text-orange-500" />} 
          description="Study sessions completed"
        />
        <StatCard 
          label="Focus Sessions" 
          value={userProgress?.focusSessions || 0} 
          icon={<Zap className="w-6 h-6 text-purple-500" />} 
          description="Total sessions completed"
        />
        <StatCard 
          label="Time Studied" 
          value={timeStudied} 
          icon={<Clock className="w-6 h-6 text-teal-500" />} 
          description="Total hours in focus"
        />
        <StatCard 
          label="Tasks Missed" 
          value={missedCount} 
          icon={<XCircle className="w-6 h-6 text-red-500" />} 
          description="Sessions you marked missed"
        />
        <StatCard 
          label="Best Streak" 
          value={`${userProgress?.longestStreak || 0} Days`} 
          icon={<Trophy className="w-6 h-6 text-yellow-500" />} 
          description="Your all-time record"
        />
      </div>

      {/* Analytics Charts */}
      <HistoryCharts tasks={tasks} />

      {/* Detailed Log */}
      <div className="space-y-6">
        <h2 className="text-3xl font-heading font-bold tracking-tight">Performance Log</h2>
        <div className="bg-card border border-border/60 shadow-sm rounded-3xl overflow-hidden">
          <div className="hidden sm:grid grid-cols-12 gap-4 p-6 text-xs font-bold text-muted-foreground uppercase tracking-widest border-b border-border/40 bg-muted/30">
            <div className="col-span-3">Date</div>
            <div className="col-span-4">Subject</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-3">Status</div>
          </div>

          <div className="divide-y divide-border/40">
            {tasks.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground font-medium">
                No history recorded yet. Start actioning tasks on your dashboard!
              </div>
            ) : (
              tasks.map((task) => (
                <div key={task.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-6 sm:items-center hover:bg-muted/20 transition-colors">
                  <div className="col-span-3 font-semibold text-primary">
                    {format(new Date(task.date), 'MMM do, yyyy')}
                  </div>
                  <div className="col-span-4 font-heading font-black text-lg">
                    {task.subject}
                  </div>
                  <div className="col-span-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border
                      ${task.type === 'HOMEWORK' ? 'bg-primary/5 text-primary border-primary/20' : 'bg-orange-500/5 text-orange-600 border-orange-500/10'}`}>
                      {task.type}
                    </span>
                  </div>
                  <div className="col-span-3">
                    <div className={cn(
                      "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter border shadow-sm",
                      task.isDone 
                        ? "bg-success/10 text-success border-success/20" 
                        : "bg-destructive/10 text-destructive border-destructive/20"
                    )}>
                      {task.isDone ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      {task.isDone ? 'COMPLETED' : 'MISSED'}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

function StatCard({ label, value, icon, description }: { label: string, value: string | number, icon: React.ReactNode, description: string }) {
  return (
    <div className="bg-card border border-border/60 p-6 rounded-3xl shadow-sm hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-muted/50 rounded-2xl">
          {icon}
        </div>
        <span className="text-3xl font-heading font-black tracking-tight">{value}</span>
      </div>
      <div>
        <p className="text-sm font-bold text-foreground mb-1">{label}</p>
        <p className="text-xs font-medium text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
