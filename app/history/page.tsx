import { getCompletedTasks, syncStreak } from '@/lib/actions';
import { HistoryCharts } from '@/components/HistoryCharts';
import { format } from 'date-fns';
import { CheckCircle2, BookOpen, Repeat, Trophy } from 'lucide-react';

export default async function HistoryPage() {
  const tasks = await getCompletedTasks();
  const userProgress = await syncStreak();

  const totalCompleted = tasks.length;
  const homeworks = tasks.filter(t => t.type === 'HOMEWORK').length;
  const revisions = tasks.filter(t => t.type === 'REVISION').length;

  return (
    <div className="space-y-12 max-w-[1600px] mx-auto animate-in fade-in duration-500 pb-16">
      <div className="pt-6 pb-2 border-b border-border/40">
        <h1 className="text-5xl font-heading font-black tracking-tight text-foreground">Activity Analytics</h1>
        <p className="text-xl text-muted-foreground font-semibold mt-3">
          Track your progress and celebrate your consistency.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Total Completed" 
          value={totalCompleted} 
          icon={<CheckCircle2 className="w-6 h-6 text-green-500" />} 
          description="Tasks finished so far"
        />
        <StatCard 
          label="Homeworks" 
          value={homeworks} 
          icon={<BookOpen className="w-6 h-6 text-blue-500" />} 
          description="Assignments completed"
        />
        <StatCard 
          label="Revisions" 
          value={revisions} 
          icon={<Repeat className="w-6 h-6 text-orange-500" />} 
          description="Study sessions completed"
        />
        <StatCard 
          label="Best Streak" 
          value={`${userProgress.longestStreak} Days`} 
          icon={<Trophy className="w-6 h-6 text-yellow-500" />} 
          description="Your all-time record"
        />
      </div>

      {/* Analytics Charts */}
      <HistoryCharts tasks={tasks} />

      {/* Detailed Log */}
      <div className="space-y-6">
        <h2 className="text-3xl font-heading font-bold tracking-tight">Completion Log</h2>
        <div className="bg-card border border-border/60 shadow-sm rounded-3xl overflow-hidden">
          <div className="hidden sm:grid grid-cols-12 gap-4 p-6 text-xs font-bold text-muted-foreground uppercase tracking-widest border-b border-border/40 bg-muted/30">
            <div className="col-span-3">Date</div>
            <div className="col-span-4">Subject</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-3">Time Range</div>
          </div>

          <div className="divide-y divide-border/40">
            {tasks.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground font-medium">
                No tasks completed yet. Your journey begins today!
              </div>
            ) : (
              tasks.map((task) => (
                <div key={task.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-6 sm:items-center hover:bg-muted/20 transition-colors">
                  <div className="col-span-3 font-semibold text-primary">
                    {format(new Date(task.date), 'MMM do, yyyy')}
                  </div>
                  <div className="col-span-4 font-heading font-bold text-lg">
                    {task.subject}
                  </div>
                  <div className="col-span-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${task.type === 'HOMEWORK' ? 'bg-primary/10 text-primary' : 'bg-orange-500/10 text-orange-600'}`}>
                      {task.type}
                    </span>
                  </div>
                  <div className="col-span-3 text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <span className="bg-muted px-2.5 py-1 rounded-md border text-[11px] font-bold">
                      {task.startTime} — {task.endTime}
                    </span>
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
