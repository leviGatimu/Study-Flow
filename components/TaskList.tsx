'use client';

import { TaskCheckbox } from '@/components/TaskCheckbox';
import { Clock } from 'lucide-react';

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
        
        return (
          <div 
            key={task.id} 
            className={`relative overflow-hidden bg-card border p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] animate-in fade-in slide-in-from-bottom-4
              ${task.isDone 
                ? 'bg-success/5 border-success/30 opacity-60' 
                : 'border-border'
              }`}
            style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
          >
            <div className="flex items-center justify-between relative z-10 flex-wrap gap-4">
              <div className="flex items-start sm:items-center space-x-5">
                <div className="scale-125 transition-transform active:scale-90 mt-1 sm:mt-0">
                  <TaskCheckbox taskId={task.id} isDone={task.isDone} />
                </div>
                <div className="transition-all duration-300">
                  <p className={`font-heading font-bold text-xl transition-colors duration-300 ${task.isDone ? 'line-through text-success' : 'text-foreground'}`}>
                    {task.subject}
                  </p>
                  
                  {/* Highly Visible Time Range */}
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm font-bold shadow-sm border transition-colors
                      ${task.isDone 
                        ? 'bg-success/10 text-success border-success/20' 
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
                  : isHomework 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
                }`}>
                {task.isDone ? 'DONE' : task.type}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
