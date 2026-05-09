import { getTemplates } from '@/lib/actions';
import { ManageForm } from '@/components/ManageForm';
import { DeleteTemplateButton } from '@/components/DeleteTemplateButton';
import { EditTemplateForm } from '@/components/EditTemplateForm';
import { Clock, Calendar as CalendarIcon, BookOpen, Repeat } from 'lucide-react';

const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default async function ManageSchedulePage() {
  const templates = await getTemplates();

  // Group templates by dayOfWeek
  const grouped = templates.reduce((acc, curr) => {
    if (!acc[curr.dayOfWeek]) acc[curr.dayOfWeek] = [];
    acc[curr.dayOfWeek].push(curr);
    return acc;
  }, {} as Record<number, typeof templates>);

  return (
    <div className="space-y-12 max-w-[1400px] mx-auto animate-in fade-in duration-500 pb-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 pb-4 border-b border-border/40">
        <div>
          <h1 className="text-5xl font-heading font-black tracking-tight text-foreground">Manage Schedule</h1>
          <p className="text-xl text-muted-foreground font-semibold mt-3">Refine your recurring study blocks and routine.</p>
        </div>
        <ManageForm />
      </div>

      <div className="grid grid-cols-1 gap-10">
        {DAYS_OF_WEEK.map((dayName, index) => {
          const dayTemplates = grouped[index] || [];
          
          return (
            <div key={index} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-xl text-primary">
                  <CalendarIcon className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-heading font-extrabold tracking-tight">{dayName}</h2>
                <div className="h-[1px] flex-1 bg-border/40 ml-4" />
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest bg-muted px-3 py-1 rounded-full border">
                  {dayTemplates.length} Blocks
                </span>
              </div>

              {dayTemplates.length === 0 ? (
                <div className="py-12 border-2 border-dashed border-border/40 rounded-3xl flex flex-col items-center justify-center text-muted-foreground bg-muted/5">
                  <p className="font-medium">No study blocks scheduled for {dayName}.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {dayTemplates.map(t => {
                    const isHomework = t.type === 'HOMEWORK';
                    return (
                      <div key={t.id} className="group relative bg-card border border-border/60 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        {/* Type Icon Background */}
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                          {isHomework ? <BookOpen size={120} /> : <Repeat size={120} />}
                        </div>

                        <div className="flex flex-col h-full relative z-10">
                          <div className="flex justify-between items-start mb-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border transition-colors
                              ${isHomework 
                                ? 'bg-primary/10 text-primary border-primary/20' 
                                : 'bg-orange-500/10 text-orange-600 border-orange-500/20'}`}>
                              {t.type}
                            </span>
                            <div className="flex items-center gap-1">
                              <EditTemplateForm template={t} />
                              <DeleteTemplateButton id={t.id} />
                            </div>
                          </div>

                          <h3 className="text-xl font-heading font-black mb-4 group-hover:text-primary transition-colors line-clamp-1">{t.subject}</h3>
                          
                          <div className="mt-auto flex flex-col gap-3">
                            <div className="flex items-center gap-3 bg-muted/50 p-3 rounded-2xl border border-border/40">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-muted-foreground uppercase leading-none mb-1">Duration</span>
                                <span className="text-sm font-bold text-foreground leading-none">{t.startTime} — {t.endTime}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3 bg-muted/50 p-3 rounded-2xl border border-border/40">
                              <div className="w-4 h-4 rounded-full border-2 border-primary/40 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-muted-foreground uppercase leading-none mb-1">Target Deadline</span>
                                <span className="text-sm font-bold text-foreground leading-none">{t.deadlineDay}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
