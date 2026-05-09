'use client';

import { useState, useTransition } from 'react';
import { Plus, BookOpen, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { createQuickTask } from '@/lib/actions';

export function QuickAddForm() {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [formData, setFormData] = useState({
    subject: '',
    startTime: '',
    endTime: '',
    type: 'HOMEWORK'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      await createQuickTask(formData);
      setFormData({ subject: '', startTime: '', endTime: '', type: 'HOMEWORK' });
      setOpen(false);
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full gap-2 font-bold hover:bg-primary/5 hover:text-primary transition-all active:scale-95 shadow-sm border-border/60">
          <Plus className="w-4 h-4" /> Quick Add Assignment
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-[32px] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-black">Quick Add Task</DialogTitle>
          <p className="text-sm text-muted-foreground">Add a one-off task for today.</p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground ml-1">Subject</Label>
            <Input 
              required 
              value={formData.subject} 
              onChange={e => setFormData({...formData, subject: e.target.value})} 
              placeholder="e.g. Extra Physics Practice" 
              className="rounded-xl h-12 font-bold"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground ml-1">Start Time</Label>
              <Input 
                type="time" 
                required 
                value={formData.startTime} 
                onChange={e => setFormData({...formData, startTime: e.target.value})} 
                className="rounded-xl h-12 font-bold"
              />
            </div>
            <div className="space-y-2">
              <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground ml-1">End Time</Label>
              <Input 
                type="time" 
                required 
                value={formData.endTime} 
                onChange={e => setFormData({...formData, endTime: e.target.value})} 
                className="rounded-xl h-12 font-bold"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground ml-1">Type</Label>
            <Select value={formData.type} onValueChange={v => setFormData({...formData, type: v})}>
              <SelectTrigger className="rounded-xl h-12 font-bold"><SelectValue /></SelectTrigger>
              <SelectContent className="rounded-xl font-bold">
                <SelectItem value="HOMEWORK">HOMEWORK</SelectItem>
                <SelectItem value="REVISION">REVISION</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button disabled={isPending} type="submit" className="w-full h-12 rounded-xl font-black text-lg shadow-lg">Add Task</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
