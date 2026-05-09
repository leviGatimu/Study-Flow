'use client';

import { TaskCheckbox } from '@/components/TaskCheckbox';
import { Clock, AlertTriangle } from 'lucide-react';

type TaskType = {
  id: string;
  subject: string;
  isDone: boolean;
  isMissed: boolean;
  type: string;
  startTime: string;
  endTime: string;
  isUrgent?: boolean;
  template: {
    startTime: string;
    endTime: string;
    deadlineDay: string;
  } | null;
};

export function TaskList({ tasks }: { tasks: TaskType[] }) {
  if (tasks.length === 0) {
    return (
      <div className="text-muted-foreground bg-card border p-6 rounded-2xl text-center shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
        No scheduled tasks for today. Rest up or get ahead!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task, index) => {
        const isHomework = task.type === 'HOMEWORK';
        const isUrgent = task.isUrgent;
        
        return (
          <div 
            key={task.id} 
            className={`relative overflow-hidden bg-card border p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] animate-in fade-in slide-in-from-bottom-4
              ${task.isDone 
                ? 'bg-success/5 border-success/30 opacity-60' 
                : task.isMissed
                  ? 'bg-destructive/5 border-destructive/30 opacity-60'
                  : isUrgent 
                    ? 'border-orange-500 shadow-lg shadow-orange-500/10 bg-orange-500/5' 
                    : 'border-border'
              }`}
            style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
          >
            {/* Urgent Glow Effect */}
            {isUrgent && !task.isDone && !task.isMissed && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 animate-pulse" />
            )}

            <div className="flex items-center justify-between relative z-10 flex-wrap gap-4">
              <div className="flex items-start sm:items-center space-x-5">
                <div className="transition-transform active:scale-90 mt-1 sm:mt-0">
                  <TaskCheckbox taskId={task.id} isDone={task.isDone} isMissed={task.isMissed} />
                </div>
                <div className="transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <p className={`font-heading font-bold text-xl transition-colors duration-300 
                      ${task.isDone ? 'line-through text-success' : task.isMissed ? 'line-through text-destructive' : 'text-foreground'}`}>
                      {task.subject}
                    </p>
                    {isUrgent && !task.isDone && !task.isMissed && (
                      <span className="flex items-center gap-1 bg-orange-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full animate-bounce">
                        <AlertTriangle className="w-3 h-3" /> URGENT EXAM PREP
                      </span>
                    )}
                  </div>
                  
                  {/* Highly Visible Time Range */}
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm font-bold shadow-sm border transition-colors
                      ${task.isDone 
                        ? 'bg-success/10 text-success border-success/20' 
                        : task.isMissed
                          ? 'bg-destructive/10 text-destructive border-destructive/20'
                          : isUrgent
                            ? 'bg-orange-500/20 text-orange-700 border-orange-500/30'
                            : 'bg-primary/5 text-primary border-primary/20'
                      }`}
                    >
                      <Clock className="w-4 h-4" />
                      <span>{task.startTime} — {task.endTime}</span>
                    </div>
                    
                    {task.template && (
                      <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1.5 rounded-lg border border-transparent">
                        Deadline: {task.template.deadlineDay}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className={`text-xs font-bold px-4 py-2 rounded-full transition-colors duration-300 self-start sm:self-auto
                ${task.isDone 
                  ? 'bg-success/20 text-success' 
                  : task.isMissed
                    ? 'bg-destructive/20 text-destructive'
                    : isUrgent
                      ? 'bg-orange-500 text-white shadow-orange-500/40 shadow-lg'
                      : isHomework 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
                }`}>
                {task.isDone ? 'DONE' : task.isMissed ? 'MISSED' : task.type}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
