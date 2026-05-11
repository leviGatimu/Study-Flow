'use client';

import { useState, useEffect } from 'react';
import { Clock, GraduationCap, Zap, Timer } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Lesson = {
  day: string;
  start: string;
  end: string;
  subject: string;
};

const SCHOOL_DATA: Lesson[] = [
  // Monday
  { day: 'Monday', start: '07:30', end: '09:00', subject: 'Self Study / Devotion' },
  { day: 'Monday', start: '09:00', end: '10:40', subject: 'Networking Fundamentals' },
  { day: 'Monday', start: '11:00', end: '11:50', subject: 'Citizenship' },
  { day: 'Monday', start: '11:50', end: '12:40', subject: 'Fundamentals of C (Extra hour)' },
  { day: 'Monday', start: '12:40', end: '13:40', subject: 'Lunch and Learn' },
  { day: 'Monday', start: '13:40', end: '15:20', subject: 'Develop Web Application using Javascripts' },
  { day: 'Monday', start: '15:40', end: '17:20', subject: 'Design Embedded Systems' },
  
  // Tuesday
  { day: 'Tuesday', start: '07:30', end: '09:00', subject: 'Self Study / Devotion' },
  { day: 'Tuesday', start: '09:00', end: '10:40', subject: 'Develop Web Application using PHP' },
  { day: 'Tuesday', start: '11:00', end: '12:40', subject: 'Design Graphic User Interface' },
  { day: 'Tuesday', start: '12:40', end: '13:40', subject: 'Lunch and Learn' },
  { day: 'Tuesday', start: '13:40', end: '15:20', subject: 'Maintain Professional Conversation in Upper Technical English' },
  { day: 'Tuesday', start: '15:40', end: '16:30', subject: 'English (Extra hour)' },
  { day: 'Tuesday', start: '16:30', end: '17:20', subject: "Students' clubs" },
  
  // Wednesday
  { day: 'Wednesday', start: '07:30', end: '09:00', subject: 'Self Study / Devotion' },
  { day: 'Wednesday', start: '09:00', end: '10:40', subject: 'Apply Fundamentals of Programming Using C' },
  { day: 'Wednesday', start: '11:00', end: '12:40', subject: 'Develop Basic Database' },
  { day: 'Wednesday', start: '12:40', end: '13:40', subject: 'Lunch and Learn' },
  { day: 'Wednesday', start: '13:40', end: '14:30', subject: 'Entrepreneurship' },
  { day: 'Wednesday', start: '14:30', end: '15:20', subject: 'Computer Basics' },
  { day: 'Wednesday', start: '15:40', end: '17:20', subject: 'Design Electrical and Electronic Circuits and Optical Instruments' },
  
  // Thursday
  { day: 'Thursday', start: '07:30', end: '09:00', subject: 'Self Study / Devotion' },
  { day: 'Thursday', start: '09:00', end: '10:40', subject: 'Design Electrical and Electronic Circuits and Optical Instruments' },
  { day: 'Thursday', start: '11:00', end: '12:40', subject: 'Design Web User Interface' },
  { day: 'Thursday', start: '12:40', end: '13:40', subject: 'Lunch and Learn' },
  { day: 'Thursday', start: '13:40', end: '14:30', subject: 'Javascript (Extra hour)' },
  { day: 'Thursday', start: '14:30', end: '15:20', subject: 'Develop Web Application using Javascripts' },
  { day: 'Thursday', start: '15:40', end: '17:20', subject: 'Apply Fundamentals of Programming Using C' },
  
  // Friday
  { day: 'Friday', start: '07:30', end: '09:00', subject: 'Self Study / Devotion' },
  { day: 'Friday', start: '09:00', end: '11:50', subject: 'Math (Algebra, Trig, Prob, Stats)' },
  { day: 'Friday', start: '11:50', end: '12:40', subject: 'Design Embedded Systems' },
  { day: 'Friday', start: '12:40', end: '13:40', subject: 'Lunch and Learn' },
  { day: 'Friday', start: '13:40', end: '14:30', subject: 'Kinyarwanda' },
  { day: 'Friday', start: '14:30', end: '15:20', subject: 'Math (Algebra, Trig, Prob, Stats)' },
  { day: 'Friday', start: '15:40', end: '17:20', subject: 'Lab (Embedded Systems)' },
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export function SchoolTimetable() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  const currentDay = format(now, 'EEEE');
  const currentTimeStr = format(now, 'HH:mm');

  const getLessonAt = (day: string, slotIndex: number) => {
    const dayLessons = SCHOOL_DATA.filter(l => l.day === day);
    return dayLessons[slotIndex];
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* 🚀 Active Session Banner */}
      {(() => {
        const active = SCHOOL_DATA.find(l => l.day === currentDay && currentTimeStr >= l.start && currentTimeStr < l.end);
        if (!active) return null;
        return (
          <div className="bg-primary text-primary-foreground p-6 rounded-[32px] shadow-2xl shadow-primary/20 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
            <div className="flex items-center gap-6 relative z-10">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
                <Zap className="w-8 h-8 fill-current" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80 mb-1 text-white">Current Session</p>
                <h2 className="text-3xl font-heading font-black">{active.subject}</h2>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/20 px-6 py-3 rounded-2xl backdrop-blur-md border border-white/20 relative z-10 font-bold">
               <Clock className="w-5 h-5" />
               <span className="text-xl font-black">{active.start} — {active.end}</span>
            </div>
          </div>
        );
      })()}

      {/* 📅 The Timetable Table */}
      <div className="bg-card border border-border/60 rounded-[32px] overflow-hidden shadow-xl">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 border-b-2 border-border/40 hover:bg-muted/50">
              <TableHead className="w-20 font-black text-center border-r uppercase tracking-widest text-[10px]">Slot</TableHead>
              {DAYS.map(day => (
                <TableHead key={day} className={cn(
                  "font-heading font-black text-lg py-6 text-center transition-colors",
                  day === currentDay ? "text-primary bg-primary/5" : "text-muted-foreground"
                )}>
                  {day.toUpperCase()}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {[0, 1, 2, 3, 4, 5, 6].map((slotIdx) => (
              <TableRow key={slotIdx} className="hover:bg-transparent">
                <TableCell className="bg-muted/30 font-black text-center border-r text-muted-foreground py-10">
                   #{slotIdx + 1}
                </TableCell>
                {DAYS.map(day => {
                  const lesson = getLessonAt(day, slotIdx);
                  const isToday = day === currentDay;
                  const isActive = isToday && lesson && currentTimeStr >= lesson.start && currentTimeStr < lesson.end;
                  const isPast = isToday && lesson && currentTimeStr >= lesson.end;

                  return (
                    <TableCell 
                      key={day} 
                      className={cn(
                        "p-1 min-w-[200px] border-r last:border-r-0 transition-all duration-300",
                        isActive ? "bg-primary/5" : "",
                        isToday && !isActive ? "bg-muted/[0.02]" : ""
                      )}
                    >
                      {lesson ? (
                        <div className={cn(
                          "h-full w-full p-6 rounded-2xl flex flex-col justify-center gap-3 transition-all duration-300",
                          isActive 
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.03] ring-4 ring-primary/10 z-10" 
                            : isPast 
                              ? "opacity-30 grayscale blur-[0.5px]" 
                              : "hover:bg-muted/40 hover:shadow-sm"
                        )}>
                          <div className="flex items-center gap-2">
                             <Clock className={cn("w-3.5 h-3.5", isActive ? "text-white" : "text-primary/60")} />
                             <span className={cn("text-[10px] font-black uppercase tracking-widest", isActive ? "text-white/80" : "text-muted-foreground")}>
                               {lesson.start} - {lesson.end}
                             </span>
                          </div>
                          <p className={cn("font-heading font-black leading-tight text-sm", isActive ? "text-white" : "text-foreground")}>
                            {lesson.subject}
                          </p>
                        </div>
                      ) : (
                        <div className="h-full w-full p-6 text-center text-muted-foreground/20 italic font-medium">
                          No Class
                        </div>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-center gap-8 py-4 px-8 bg-muted/20 border border-border/40 rounded-full w-fit mx-auto shadow-sm">
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Active Lesson</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted border border-border/60" />
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Upcoming</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted opacity-30 border border-border/60" />
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Completed</span>
         </div>
      </div>
    </div>
  );
}


