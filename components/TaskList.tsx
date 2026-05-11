'use client';

import { TaskCheckbox } from '@/components/TaskCheckbox';
import { Clock, AlertTriangle, BellRing } from 'lucide-react';

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
            className={`relative overflow-hidden bg-card border p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.99] animate-in fade-in slide-in-from-bottom-4
              ${task.isDone 
                ? 'bg-success/5 border-success/30 opacity-60' 
                : task.isMissed
                  ? 'bg-destructive/5 border-destructive/30 opacity-60'
                  : isUrgent 
                    ? 'border-orange-500 shadow-lg shadow-orange-500/20 bg-orange-500/[0.03]' 
                    : 'border-border shadow-sm'
              }`}
            style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
          >
            {/* Urgent Glow Effect */}
            {isUrgent && !task.isDone && !task.isMissed && (
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/20 rounded-full blur-[64px] -z-10 translate-x-1/3 -translate-y-1/3 animate-pulse" />
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
                      <div className="flex items-center gap-1.5 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full animate-in zoom-in duration-500">
                        <BellRing className="w-3 h-3 animate-bounce" /> SMART ALARM: EXAM NEAR
                      </div>
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
                            ? 'bg-orange-500 text-white border-orange-600 shadow-md shadow-orange-500/20'
                            : 'bg-primary/5 text-primary border-primary/20'
                      }`}
                    >
                      <Clock className="w-4 h-4" />
                      <span>{task.startTime} — {task.endTime}</span>
                    </div>
                    
                    {task.template && (
                      <span className={`text-sm font-semibold px-3 py-1.5 rounded-lg border 
                        ${isUrgent && !task.isDone && !task.isMissed ? 'bg-orange-500/10 border-orange-500/20 text-orange-700' : 'bg-muted border-transparent text-muted-foreground'}`}>
                        Deadline: {task.template.deadlineDay}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className={`text-xs font-black px-4 py-2 rounded-full transition-all duration-300 self-start sm:self-auto tracking-widest uppercase
                ${task.isDone 
                  ? 'bg-success/20 text-success' 
                  : task.isMissed
                    ? 'bg-destructive/20 text-destructive'
                    : isUrgent
                      ? 'bg-orange-500 text-white shadow-orange-500/40 shadow-lg scale-110'
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
