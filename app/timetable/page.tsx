import { SchoolTimetable } from '@/components/SchoolTimetable';
import { GraduationCap } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function TimetablePage() {
  return (
    <div className="flex flex-col space-y-12 max-w-[1600px] mx-auto animate-in fade-in duration-500 pb-16">
      <div className="pt-10 px-4 md:px-8 pb-6 border-b border-border/40 flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-heading font-black tracking-tight text-foreground">School Timetable</h1>
          <p className="text-xl text-muted-foreground font-semibold mt-3">Live tracking of the official school routine.</p>
        </div>
        <div className="p-4 bg-primary/10 rounded-3xl text-primary">
          <GraduationCap className="w-8 h-8" />
        </div>
      </div>

      <div className="px-4 md:px-8">
         <SchoolTimetable />
      </div>
    </div>
  );
}
