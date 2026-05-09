'use client';

import { useState, useTransition } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, addMonths, subMonths, isToday } from 'date-fns';
import { ChevronLeft, ChevronRight, Clock, Edit2, Bookmark, BookmarkCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TaskCheckbox } from '@/components/TaskCheckbox';
import { toggleMarkedDay, updateTask } from '@/lib/actions';

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
  date: Date;
};

export function CalendarGrid({ tasks, markedDays = [] }: { tasks: TaskType[], markedDays?: Date[] }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Handle filling the start of the week
  const startDay = monthStart.getDay();
  const prefixDays = Array.from({ length: startDay }).map((_, i) => null);

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const goToday = () => setCurrentDate(new Date());

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
    setEditingTaskId(null);
  };

  const selectedTasks = selectedDate 
    ? tasks.filter(t => isSameDay(new Date(t.date), selectedDate))
    : [];
    
  const isSelectedDateMarked = selectedDate 
    ? markedDays.some(md => isSameDay(new Date(md), selectedDate))
    : false;

  const handleToggleMark = () => {
    if (!selectedDate) return;
    startTransition(() => {
      toggleMarkedDay(selectedDate, !isSelectedDateMarked);
    });
  };

  return (
    <div className="flex flex-col h-full bg-card rounded-3xl border shadow-sm overflow-hidden">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-6 border-b shrink-0">
        <h2 className="text-3xl font-heading font-extrabold text-foreground tracking-tight">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="rounded-full bg-background border hover:bg-secondary active:scale-95 transition-all shadow-sm font-bold" onClick={goToday}>
            Today
          </Button>
          <div className="flex items-center space-x-1 bg-background rounded-full p-1 border shadow-sm">
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-secondary active:scale-95 transition-all" onClick={prevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-secondary active:scale-95 transition-all" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 bg-muted/30 py-3 border-b shrink-0">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest">{day}</div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7 flex-1 auto-rows-fr bg-border gap-px overflow-y-auto min-h-0">
        {prefixDays.map((_, i) => (
          <div key={`prefix-${i}`} className="bg-card/50 p-2" />
        ))}
        {days.map((date) => {
          const dayTasks = tasks.filter(t => isSameDay(new Date(t.date), date));
          const today = isToday(date);
          const isMarked = markedDays.some(md => isSameDay(new Date(md), date));
          
          return (
            <div 
              key={date.toString()} 
              onClick={() => handleDayClick(date)}
              className={`bg-card p-3 sm:p-4 cursor-pointer transition-all duration-200 hover:bg-secondary/60 flex flex-col space-y-3 relative overflow-hidden group min-h-[160px] 
                ${today ? 'ring-2 ring-inset ring-primary bg-primary/5' : ''}
                ${isMarked ? 'bg-destructive/5 ring-1 ring-inset ring-destructive/30 hover:bg-destructive/10' : ''}
              `}
            >
              <div className="flex justify-between items-start">
                <span className={`text-base font-heading font-extrabold w-10 h-10 flex items-center justify-center rounded-full transition-colors 
                  ${today ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20' : 
                    isMarked ? 'bg-destructive/10 text-destructive' : 'text-foreground/70 group-hover:text-foreground'}`}>
                  {format(date, 'd')}
                </span>
                {dayTasks.length > 0 && (
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${isMarked ? 'bg-destructive/20 text-destructive' : 'bg-muted text-muted-foreground'}`}>
                    {dayTasks.length}
                  </span>
                )}
              </div>
              
              <div className="flex flex-col gap-1.5 mt-1 z-10 flex-1 min-h-0">
                {dayTasks.slice(0, 3).map(task => {
                  const isHomework = task.type === 'HOMEWORK';
                  return (
                    <div 
                      key={task.id} 
                      className={`text-[11px] sm:text-xs truncate px-2.5 py-1 rounded-lg font-bold transition-all duration-200 border
                        ${task.isDone 
                          ? 'bg-success/10 text-success border-success/20 line-through opacity-60' 
                          : isHomework 
                            ? 'bg-primary/10 text-primary border-primary/20' 
                            : 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20'
                        }`}
                      title={task.subject}
                    >
                      {task.subject}
                    </div>
                  );
                })}
                {dayTasks.length > 3 && (
                  <div className={`text-xs font-bold px-1 mt-1 ${isMarked ? 'text-destructive/70' : 'text-muted-foreground'}`}>
                    + {dayTasks.length - 3} more
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Day Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className={`sm:max-w-lg rounded-3xl p-0 overflow-hidden border shadow-xl animate-in fade-in zoom-in-95 duration-200 ${isSelectedDateMarked ? 'border-destructive/30' : ''}`}>
          <div className={`bg-card ${isSelectedDateMarked ? 'bg-destructive/5' : ''}`}>
            <DialogHeader className="p-6 border-b bg-muted/20">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-2xl font-heading font-extrabold text-foreground flex items-center gap-3">
                  <span>{selectedDate ? format(selectedDate, 'EEEE, MMMM do') : ''}</span>
                  {selectedDate && isToday(selectedDate) && (
                    <span className="text-xs tracking-widest uppercase bg-primary text-primary-foreground px-3 py-1 rounded-full shadow-sm">Today</span>
                  )}
                </DialogTitle>
                
                {/* Mark Day Toggle */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleToggleMark}
                  disabled={isPending}
                  className={`rounded-full px-3 transition-colors ${isSelectedDateMarked ? 'bg-destructive/20 text-destructive hover:bg-destructive/30 hover:text-destructive' : 'text-muted-foreground hover:text-destructive hover:bg-destructive/10'}`}
                >
                  {isSelectedDateMarked ? <BookmarkCheck className="w-4 h-4 mr-2" /> : <Bookmark className="w-4 h-4 mr-2" />}
                  {isSelectedDateMarked ? 'Marked' : 'Mark Day'}
                </Button>
              </div>
            </DialogHeader>
            
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {selectedTasks.length === 0 ? (
                <div className="bg-muted border p-6 rounded-2xl text-center text-muted-foreground font-medium shadow-sm">
                  No tasks scheduled for this day.
                </div>
              ) : (
                <div className="space-y-3">
                  {selectedTasks.map((task, index) => {
                    const isHomework = task.type === 'HOMEWORK';
                    const isEditing = editingTaskId === task.id;

                    if (isEditing) {
                      return (
                        <EditTaskForm 
                          key={task.id} 
                          task={task} 
                          onClose={() => setEditingTaskId(null)} 
                        />
                      );
                    }

                    return (
                      <div 
                        key={task.id} 
                        className={`relative overflow-hidden bg-card border p-4 rounded-2xl transition-all duration-300 hover:shadow-sm animate-in fade-in slide-in-from-bottom-4
                          ${task.isDone 
                            ? 'bg-success/5 border-success/30 opacity-70' 
                            : 'border-border'
                          }`}
                        style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                      >
                        <div className="flex items-center justify-between relative z-10 gap-4">
                          <div className="flex items-start space-x-4">
                            <div className="scale-110 transition-transform active:scale-90 mt-0.5">
                              <TaskCheckbox taskId={task.id} isDone={task.isDone} />
                            </div>
                            <div>
                              <p className={`font-heading font-bold text-lg transition-colors ${task.isDone ? 'line-through text-success' : 'text-foreground'}`}>
                                {task.subject}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                                <p className="text-sm font-medium text-muted-foreground">
                                  {task.startTime} - {task.endTime}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2 shrink-0">
                            <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider
                              ${task.isDone 
                                ? 'bg-success/20 text-success' 
                                : isHomework 
                                  ? 'bg-primary/10 text-primary' 
                                  : 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
                              }`}>
                              {task.isDone ? 'DONE' : task.type}
                            </span>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => setEditingTaskId(task.id)}
                              className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
                            >
                              <Edit2 className="w-3 h-3 mr-1.5" /> Edit
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Subcomponent for editing a task within the modal
function EditTaskForm({ task, onClose }: { task: TaskType, onClose: () => void }) {
  const [isPending, startTransition] = useTransition();
  const [dateStr, setDateStr] = useState(format(new Date(task.date), 'yyyy-MM-dd'));
  const [startTime, setStartTime] = useState(task.startTime);
  const [endTime, setEndTime] = useState(task.endTime);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      // Need to adjust date format to local midnight properly
      const dateParts = dateStr.split('-');
      const newDate = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]));
      
      updateTask(task.id, {
        date: newDate,
        startTime,
        endTime
      });
      onClose();
    });
  };

  return (
    <div className="bg-muted/30 border border-border p-4 rounded-2xl animate-in zoom-in-95 duration-200">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h4 className="font-heading font-bold text-foreground">{task.subject} <span className="text-sm font-normal text-muted-foreground">(Edit)</span></h4>
        
        <div className="space-y-2">
          <Label className="text-xs font-bold text-muted-foreground uppercase">Date</Label>
          <Input 
            type="date" 
            required 
            value={dateStr} 
            onChange={e => setDateStr(e.target.value)}
            className="h-9 rounded-xl bg-background"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label className="text-xs font-bold text-muted-foreground uppercase">Start Time</Label>
            <Input 
              type="time" 
              required 
              value={startTime} 
              onChange={e => setStartTime(e.target.value)}
              className="h-9 rounded-xl bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-xs font-bold text-muted-foreground uppercase">End Time</Label>
            <Input 
              type="time" 
              required 
              value={endTime} 
              onChange={e => setEndTime(e.target.value)}
              className="h-9 rounded-xl bg-background"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-2">
          <Button variant="ghost" size="sm" type="button" onClick={onClose} disabled={isPending} className="rounded-xl">Cancel</Button>
          <Button size="sm" type="submit" disabled={isPending} className="rounded-xl font-bold shadow-sm">Save Changes</Button>
        </div>
      </form>
    </div>
  );
}
