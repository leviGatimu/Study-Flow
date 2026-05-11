import { getResources, getMasteryItems } from '@/lib/actions';
import { AddResourceForm } from '@/components/AddResourceForm';
import { DeleteResourceButton } from '@/components/DeleteResourceButton';
import { AddMasteryForm } from '@/components/AddMasteryForm';
import { MasteryList } from '@/components/MasteryList';
import { 
  FileText, Link as LinkIcon, 
  ChevronLeft, GraduationCap, 
  BookOpen, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Resource, MasteryItem } from '@/lib/types';

export default async function SubjectResourcesPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  const decodedSubject = decodeURIComponent(subject);
  
  const resources = await getResources(decodedSubject);
  const masteryItems = await getMasteryItems(decodedSubject);

  return (
    <div className="flex flex-col space-y-12 max-w-[1600px] mx-auto animate-in fade-in duration-500 pb-16 px-4 md:px-8">
      {/* Subject Header */}
      <div className="pt-10 pb-6 border-b border-border/40 space-y-4">
        <Link href="/resources" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
          <ChevronLeft className="w-3 h-3" /> Back to Subjects
        </Link>
        <div className="flex items-center gap-6">
           <div className="p-4 bg-primary/10 rounded-3xl text-primary">
             <GraduationCap className="w-8 h-8" />
           </div>
           <div>
             <h1 className="text-5xl font-heading font-black tracking-tight text-foreground">{decodedSubject}</h1>
             <p className="text-xl text-muted-foreground font-semibold mt-1">Study materials and syllabus tracking.</p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
        
        {/* Left Column: Mastery Tracking */}
        <div className="xl:col-span-7 space-y-8">
           <div className="bg-card border border-border/60 rounded-[40px] p-10 shadow-sm relative overflow-hidden">
             {/* Decorative */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
             
             <div className="relative z-10 flex items-center justify-between mb-10">
               <div className="flex items-center gap-4">
                 <div className="p-3 bg-primary rounded-2xl text-white shadow-lg shadow-primary/20">
                    <Sparkles className="w-5 h-5" />
                 </div>
                 <h2 className="text-3xl font-heading font-black">Syllabus Mastery</h2>
               </div>
               <AddMasteryForm subject={decodedSubject} />
             </div>

             <MasteryList 
                items={masteryItems as MasteryItem[]} 
                subject={decodedSubject} 
              />
           </div>
        </div>

        {/* Right Column: Resources */}
        <div className="xl:col-span-5 space-y-8">
           <div className="bg-card border border-border/60 rounded-[40px] p-10 shadow-sm">
             <div className="flex items-center justify-between mb-10">
               <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-heading font-black">Resources</h2>
               </div>
               <AddResourceForm subject={decodedSubject} />
             </div>

             <div className="space-y-4">
               {resources.length === 0 ? (
                 <div className="py-20 text-center border-2 border-dashed border-border/40 rounded-[32px] bg-muted/30">
                   <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs opacity-50">No resources yet</p>
                 </div>
               ) : (
                 resources.map((res: Resource) => (
                   <div 
                    key={res.id} 
                    className="group flex items-center justify-between p-6 rounded-[28px] border border-border/40 bg-muted/20 hover:bg-white dark:hover:bg-black transition-all hover:shadow-xl hover:-translate-y-1"
                   >
                     <div className="flex items-center gap-5">
                       <div className={cn(
                         "p-3 rounded-2xl transition-transform group-hover:scale-110 shadow-sm",
                         res.type === 'FILE' ? "bg-orange-500/10 text-orange-600" : "bg-blue-500/10 text-blue-600"
                       )}>
                         {res.type === 'FILE' ? <FileText className="w-5 h-5" /> : <LinkIcon className="w-5 h-5" />}
                       </div>
                       <div>
                         <p className="font-bold text-lg leading-none mb-1 group-hover:text-primary transition-colors">{res.title}</p>
                         <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{res.type}</p>
                       </div>
                     </div>
                     
                     <div className="flex items-center gap-3">
                       <a 
                        href={res.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 rounded-xl bg-background border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all active:scale-90"
                       >
                         <ChevronLeft className="w-4 h-4 rotate-180" />
                       </a>
                       <DeleteResourceButton id={res.id} subject={decodedSubject} />
                     </div>
                   </div>
                 ))
               )}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

