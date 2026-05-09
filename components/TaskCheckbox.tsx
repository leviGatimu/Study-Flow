'use client';

import { useTransition } from 'react';
import { toggleTaskDone } from '@/lib/actions';
import { Checkbox } from '@/components/ui/checkbox';

export function TaskCheckbox({ taskId, isDone }: { taskId: string; isDone: boolean }) {
  const [isPending, startTransition] = useTransition();

  return (
    <Checkbox 
      checked={isDone} 
      onCheckedChange={(checked) => {
        startTransition(() => {
          toggleTaskDone(taskId, checked === true);
        });
      }} 
      disabled={isPending}
      className="h-5 w-5"
    />
  );
}
