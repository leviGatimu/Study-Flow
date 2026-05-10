import { prisma } from '@/lib/prisma';
import { startOfWeek, endOfWeek, startOfDay, endOfDay, addDays, format, isSameDay } from 'date-fns';
import { Clock, School, Coffee, BookOpen, Repeat, CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default async function TimetablePage() {
  const today = new Date();
  const start = startOfWeek(today, { weekStartsOn: 1 }); // Monday
  const end = endOfWeek(today, { weekStartsOn: 1 });   // Sunday

  const weekTasks = await prisma.task.findMany({
    where: {
      date: { gte: start, lte: end },
      isDeleted: false
    },
    orderBy: { startTime: 'asc' }
  });

  const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  // School Hours
  const SCHOOL_WEEKDAY = { start: "07:30", end: "17:20", label: "School Hours" };
  const SCHOOL_SATURDAY = { start: "08:00", end: "14:00", label: "School Hours" };

  const getMinutes = (timeStr: string) => {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
  };

  return (
    <div className="space-y-12 max-w-[1600px] mx-auto animate-in fade-in duration-500 pb-16">
      <div className="pt-6 pb-2 border-b border-border/40">
        <h1 className="text-5xl font-heading font-black tracking-tight text-foreground">Weekly Timetable</h1>
        <p className="text-xl text-muted-foreground font-semibold mt-3">A bird&apos;s eye view of your entire academic week.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {DAYS.map((dayName, index) => {
          const date = addDays(start, index);
          const dayTasks = weekTasks.filter(t => isSameDay(new Date(t.date), date));
          
          // Construct the day's timeline
          const timeline: any[] = [];
          
          // 1. Add School if applicable
          if (index < 5) { // Mon-Fri
             timeline.push({ ...SCHOOL_WEEKDAY, type: 'SCHOOL' });
          } else if (index === 5) { // Sat
             timeline.push({ ...SCHOOL_SATURDAY, type: 'SCHOOL' });
          }

          // 2. Add Study Tasks
          dayTasks.forEach(task => {
            timeline.push({
              start: task.startTime,
              end: task.endTime,
              label: task.subject,
              type: 'STUDY',
              isDone: task.isDone,
              isMissed: task.isMissed,
              subType: task.type
            });
          });

          // Sort by start time
          timeline.sort((a, b) => getMinutes(a.start) - getMinutes(b.start));

          // 3. Detect Breaks
          const fullTimeline: any[] = [];
          for (let i = 0; i < timeline.length; i++) {
            const current = timeline[i];
            
            // If there's a gap between school/tasks, add a break
            if (i > 0) {
              const prev = timeline[i-1];
              const gapStart = prev.end;
              const gapEnd = current.start;
              
              if (getMinutes(gapEnd) > getMinutes(gapStart)) {
                fullTimeline.push({
                  start: gapStart,
                  end: gapEnd,
                  label: "Break",
                  type: "BREAK"
                });
              }
            }
            fullTimeline.push(current);
          }

          return (
            <div key={dayName} className="flex flex-col space-y-4">
              <div className={cn(
                "p-4 rounded-2xl border text-center transition-all",
                isSameDay(date, today) ? "bg-primary text-white shadow-lg shadow-primary/20 ring-4 ring-primary/10" : "bg-card border-border/60"
              )}>
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-0.5">{dayName.slice(0, 3)}</span>
                <span className="text-xl font-heading font-black">{format(date, 'd')}</span>
              </div>

              <div className="flex-1 space-y-3">
                {fullTimeline.length === 0 ? (
                  <div className="h-full border-2 border-dashed border-border/40 rounded-3xl flex items-center justify-center p-8 text-center text-muted-foreground italic text-xs">
                    Free Day
                  </div>
                ) : (
                  fullTimeline.map((item, i) => {
                    const isSchool = item.type === 'SCHOOL';
                    const isStudy = item.type === 'STUDY';
                    const isBreak = item.type === 'BREAK';

                    return (
                      <div 
                        key={i} 
                        className={cn(
                          "relative p-4 rounded-2xl border transition-all hover:scale-[1.02] group",
                          isSchool && "bg-blue-500/5 border-blue-500/20 text-blue-700",
                          isBreak && "bg-muted/30 border-dashed border-border/40 text-muted-foreground",
                          isStudy && !item.isDone && !item.isMissed && (item.subType === 'HOMEWORK' ? "bg-primary/5 border-primary/20 text-primary" : "bg-orange-500/5 border-orange-500/20 text-orange-600"),
                          item.isDone && "bg-success/10 border-success/30 text-success opacity-80",
                          item.isMissed && "bg-destructive/10 border-destructive/30 text-destructive opacity-80"
                        )}
                      >
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-black uppercase tracking-widest opacity-70">
                              {item.start} - {item.end}
                            </span>
                            {isStudy && item.isDone && <CheckCircle2 className="w-3 h-3" />}
                            {isStudy && item.isMissed && <XCircle className="w-3 h-3" />}
                          </div>
                          
                          <div className="flex items-center gap-2">
                             {isSchool && <School className="w-3.5 h-3.5" />}
                             {isBreak && <Coffee className="w-3.5 h-3.5" />}
                             {isStudy && (item.subType === 'HOMEWORK' ? <BookOpen className="w-3.5 h-3.5" /> : <Repeat className="w-3.5 h-3.5" />)}
                             <span className={cn(
                               "text-sm font-bold tracking-tight line-clamp-1",
                               (item.isDone || item.isMissed) && "line-through"
                             )}>
                               {item.label}
                             </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
