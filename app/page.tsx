import { getTodayTasks, syncStreak, getEvents, getTomorrowTasks } from '@/lib/actions';
import { prisma } from '@/lib/prisma';
import { TaskList } from '@/components/TaskList';
import { ProgressWidget } from '@/components/ProgressWidget';
import { LiveFocusBanner } from '@/components/LiveFocusBanner';
import { RwandaClock } from '@/components/RwandaClock';
import { DailyQuote } from '@/components/DailyQuote';
import { DynamicGreeting } from '@/components/DynamicGreeting';
import { ExamCountdown } from '@/components/ExamCountdown';
import { QuickAddForm } from '@/components/QuickAddForm';
import { format, addDays } from 'date-fns';
import { Flame, Trophy } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Server Component
export default async function Dashboard() {
  const todayTasks = await getTodayTasks();
  const tomorrowTasks = await getTomorrowTasks();
  const userProgress = await syncStreak();
  const events = await getEvents();
  
  const totalTasks = todayTasks.length;
  const completedTasks = todayTasks.filter((t) => t.isDone).length;
  const progressPercentage = totalTasks === 0 ? 100 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="flex flex-col space-y-12 max-w-[1600px] mx-auto animate-in fade-in duration-500 pb-16">
      {/* Hero Section */}
      <section className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 pb-4 border-b border-border/40 mb-2">
        <div className="space-y-4">
          <div className="flex items-center gap-4 flex-wrap">
            <DynamicGreeting />
            
            {/* Duolingo-style Streak Widget */}
            <div className="flex items-center gap-3 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-2xl animate-in zoom-in duration-500 delay-200 shadow-sm shadow-orange-500/5 hover:scale-105 transition-transform cursor-default">
              <div className="relative">
                <Flame className="w-6 h-6 text-orange-500 fill-orange-500 animate-pulse" />
                <div className="absolute inset-0 bg-orange-500 blur-lg opacity-20" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-black text-orange-600 leading-none">
                  {userProgress.currentStreak}
                </span>
                <span className="text-[10px] font-bold text-orange-600/80 uppercase tracking-widest leading-none mt-0.5">
                  Day Streak
                </span>
              </div>
            </div>

            {/* Longest Streak / Trophy Widget */}
            <div className="flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-2xl animate-in zoom-in duration-500 delay-300 shadow-sm shadow-blue-500/5 hover:scale-105 transition-transform cursor-default">
              <Trophy className="w-6 h-6 text-blue-600 fill-blue-500/20" />
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-black text-blue-700 leading-none">
                  {userProgress.longestStreak}
                </span>
                <span className="text-[10px] font-bold text-blue-600/80 uppercase tracking-widest leading-none mt-0.5">
                  Best
                </span>
              </div>
            </div>
          </div>
          <p className="text-xl text-muted-foreground font-semibold">
            {format(new Date(), "EEEE, MMMM do, yyyy")}
          </p>
        </div>
        
        <div className="bg-card border border-border/60 p-5 rounded-2xl shadow-sm min-w-[220px]">
          <RwandaClock />
        </div>
      </section>

      {/* Live Focus tracking */}
      <section>
        <LiveFocusBanner todayTasks={todayTasks as any} />
      </section>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left Column: Today's Focus & Bible Verse */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-heading font-bold tracking-tight text-foreground">Today's Focus</h2>
              <div className="flex items-center gap-4">
                <QuickAddForm />
                <div className="text-sm font-semibold bg-muted px-4 py-1.5 rounded-full text-muted-foreground border">
                  {completedTasks} / {totalTasks} Tasks
                </div>
              </div>
            </div>
            
            <TaskList tasks={todayTasks as any} />
          </div>

          {/* Daily Quote / Bible Verse */}
          <DailyQuote />

          {/* Tomorrow's Plan (Below Quote) */}
          <div className="bg-card border border-border/60 shadow-sm rounded-[32px] p-8 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
             {/* Decorative */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-full blur-3xl -z-0 opacity-20 translate-x-1/2 -translate-y-1/2" />
            
            <h3 className="font-heading font-bold text-xl mb-6 relative z-10 flex items-center gap-2">
               <Trophy className="w-5 h-5 text-secondary" />
               Tomorrow&apos;s Plan
            </h3>
            
            <div className="relative z-10">
              {tomorrowTasks.length === 0 ? (
                <p className="text-sm font-medium text-muted-foreground text-center py-6 bg-muted/50 rounded-2xl border border-border/50">Nothing scheduled for tomorrow.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tomorrowTasks.map(task => (
                    <div key={task.id} className="flex justify-between items-center bg-muted/40 px-5 py-4 rounded-2xl border border-border/40 group hover:bg-white dark:hover:bg-black transition-colors shadow-sm">
                      <span className="font-bold text-foreground group-hover:text-primary transition-colors">{task.subject}</span>
                      <span className="text-xs font-black text-muted-foreground bg-background px-3 py-1 rounded-full border">{task.startTime}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Quick Overview & Events */}
        <div className="lg:col-span-4 space-y-8">
          
          <ProgressWidget 
            percentage={progressPercentage} 
            completed={completedTasks} 
            total={totalTasks} 
          />

          <ExamCountdown events={events as any} />
        </div>
      </div>
    </div>
  );
}
