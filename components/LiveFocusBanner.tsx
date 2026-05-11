'use client';

import { useEffect, useState } from 'react';
import { Clock, CheckCircle2, ArrowRightCircle, Target } from 'lucide-react';
import Link from 'next/link';

type TaskType = {
  id: string;
  subject: string;
  isDone: boolean;
  type: string;
  startTime: string;
  endTime: string;
  template: {
    startTime: string;
    endTime: string;
    deadlineDay: string;
  } | null;
};

export function LiveFocusBanner({ todayTasks }: { todayTasks: TaskType[] }) {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  // Update time every minute
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    const timeoutId = setTimeout(() => {
      setCurrentTime(new Date());
      intervalId = setInterval(() => {
        setCurrentTime(prev => {
          const now = new Date();
          if (prev && now.getMinutes() === prev.getMinutes() && now.getHours() === prev.getHours()) {
              return prev;
          }
          return now;
        });
      }, 10000); // Check every 10s to be responsive, but functional update handles it
    }, 0);
    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  if (!currentTime) return null; // Avoid hydration mismatch

  // Helper to parse HH:MM to minutes since midnight for easy comparison
  const getMinutes = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

  // Find active task
  const activeTask = todayTasks.find(task => {
    const startMins = getMinutes(task.startTime);
    const endMins = getMinutes(task.endTime);
    return currentMinutes >= startMins && currentMinutes < endMins;
  });

  // Find next task
  const futureTasks = todayTasks.filter(task => {
    const startMins = getMinutes(task.startTime);
    return currentMinutes < startMins;
  });
  
  const nextTask = futureTasks.sort((a, b) => getMinutes(a.startTime) - getMinutes(b.startTime))[0];

  // Check if done for the day (no active tasks, no future tasks, and we had tasks today)
  const isDoneForTheDay = todayTasks.length > 0 && !activeTask && futureTasks.length === 0;

  // Formatting current time "h:mm A"
  const formattedTime = currentTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

  if (todayTasks.length === 0) {
    return null; // Don't show banner if there are no tasks at all today
  }

  // STATE C: Done for the day
  if (isDoneForTheDay) {
    return (
      <div className="bg-success/10 border border-success/30 text-success-foreground p-6 sm:p-8 rounded-3xl mb-8 animate-in fade-in slide-in-from-top-4 duration-500 flex items-center justify-between shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-sm font-bold opacity-80 mb-2 flex items-center gap-2"><Clock className="w-4 h-4" /> {formattedTime}</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-success">All scheduled tasks complete.</h2>
          <p className="text-success/80 font-medium mt-1 text-lg">Excellent work today. Rest easy.</p>
        </div>
        <div className="h-16 w-16 rounded-full bg-success/20 flex items-center justify-center text-success relative z-10 shrink-0 ml-4 hidden sm:flex">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="absolute -right-4 -top-8 text-[150px] opacity-10 leading-none select-none pointer-events-none">🎉</div>
      </div>
    );
  }

  // STATE A: Active Task
  if (activeTask) {
    const isHomework = activeTask.type === 'HOMEWORK';
    const bgColorClass = isHomework ? 'bg-primary' : 'bg-orange-600';
    const shadowColorClass = isHomework ? 'shadow-primary/30' : 'shadow-orange-600/30';
    
    // Calculate Time Left
    const endMins = getMinutes(activeTask.endTime);
    const diffMins = endMins - currentMinutes;
    const hoursLeft = Math.floor(diffMins / 60);
    const minsLeft = diffMins % 60;
    const timeLeftStr = hoursLeft > 0 ? `${hoursLeft}h ${minsLeft}m left` : `${diffMins} min left`;

    return (
      <Link href={`/focus/${activeTask.id}`} className="block group">
        <div className={`${bgColorClass} text-white p-6 sm:p-8 rounded-3xl mb-8 shadow-xl ${shadowColorClass} animate-in fade-in slide-in-from-top-4 duration-500 relative overflow-hidden group-hover:scale-[1.01] group-active:scale-[0.99] transition-all`}>
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-0 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute -right-4 -bottom-10 text-[160px] opacity-10 leading-none select-none pointer-events-none rotate-[-10deg]">
            📖
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <p className="text-sm font-bold opacity-90 tracking-widest uppercase">Current Focus • {formattedTime}</p>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tight mb-4 line-clamp-2">{activeTask.subject}</h2>
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-bold shadow-sm flex items-center gap-2">
                  <Target className="w-4 h-4" /> Until {activeTask.endTime}
                </span>
                <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-bold text-white shadow-sm flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {timeLeftStr}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-3 self-start sm:self-auto shrink-0">
              <div className="text-sm font-black px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md tracking-widest uppercase shadow-sm border border-white/20">
                {activeTask.type}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity bg-white text-primary px-4 py-1.5 rounded-full shadow-lg">
                Enter Focus Mode
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // STATE B: Break / Next Up
  return (
    <div className="bg-card border border-secondary/80 p-6 sm:p-8 rounded-3xl mb-8 shadow-sm animate-in fade-in slide-in-from-top-4 duration-500 relative overflow-hidden">
      <div className="absolute -right-4 -bottom-6 text-[140px] opacity-[0.03] leading-none select-none pointer-events-none rotate-[15deg]">
        ☕
      </div>
      <div className="relative z-10">
        <div className="flex items-center space-x-2 mb-3">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{formattedTime}</p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground tracking-tight">Free Time / Break</h2>
        
        {nextTask && (
          <div className="mt-5 bg-muted/50 rounded-xl p-4 inline-flex items-center gap-3 border border-border/60 shadow-sm">
            <ArrowRightCircle className="w-5 h-5 text-primary" />
            <p className="text-sm sm:text-base font-medium text-muted-foreground">
              Next up: <span className="font-bold text-foreground mx-1">{nextTask.subject}</span> 
              <span className="bg-background px-2.5 py-1 rounded-md border shadow-sm ml-2 font-bold text-foreground">{nextTask.startTime}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
