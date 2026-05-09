'use client';

import { useTransition } from 'react';
import { toggleTaskDone, toggleTaskMissed } from '@/lib/actions';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TaskCheckbox({ taskId, isDone, isMissed }: { taskId: string; isDone: boolean; isMissed: boolean }) {
  const [isPending, startTransition] = useTransition();

  const handleToggleDone = () => {
    startTransition(() => {
      toggleTaskDone(taskId, !isDone);
    });
  };

  const handleToggleMissed = () => {
    startTransition(() => {
      toggleTaskMissed(taskId, !isMissed);
    });
  };

  return (
    <div className="flex items-center gap-2">
      {/* Done Button (Green Tick) */}
      <button
        onClick={(e) => {
          e.preventDefault();
          handleToggleDone();
        }}
        disabled={isPending}
        className={cn(
          "w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all active:scale-90",
          isDone 
            ? "bg-success border-success text-white shadow-lg shadow-success/30" 
            : "border-border hover:border-success/50 text-transparent hover:text-success/30"
        )}
      >
        <Check className={cn("w-5 h-5", isDone ? "opacity-100" : "opacity-0 hover:opacity-100")} strokeWidth={4} />
      </button>

      {/* Missed Button (Red Cross) */}
      <button
        onClick={(e) => {
          e.preventDefault();
          handleToggleMissed();
        }}
        disabled={isPending}
        className={cn(
          "w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all active:scale-90",
          isMissed 
            ? "bg-destructive border-destructive text-white shadow-lg shadow-destructive/30" 
            : "border-border hover:border-destructive/50 text-transparent hover:text-destructive/30"
        )}
      >
        <X className={cn("w-5 h-5", isMissed ? "opacity-100" : "opacity-0 hover:opacity-100")} strokeWidth={4} />
      </button>
    </div>
  );
}
