import { getUniqueSubjects, getResources, getMasteryItems } from '@/lib/actions';
import Link from 'next/link';
import { BookOpen, ChevronRight, FileText, GraduationCap } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ResourcesPage() {
  const subjects = await getUniqueSubjects();

  // Fetch data for each subject
  const subjectData = await Promise.all(subjects.map(async (name) => {
    const [resources, masteryItems] = await Promise.all([
      getResources(name),
      getMasteryItems(name)
    ]);
    
    const completedMastery = masteryItems.filter(i => i.isCompleted).length;
    const totalMastery = masteryItems.length;
    const masteryPercentage = totalMastery === 0 ? 0 : Math.round((completedMastery / totalMastery) * 100);

    return { 
      name, 
      resourceCount: resources.length,
      masteryPercentage,
      totalMastery
    };
  }));

  return (
    <div className="space-y-12 max-w-[1400px] mx-auto animate-in fade-in duration-500 pb-16">
      <div className="pt-6 pb-2 border-b border-border/40">
        <h1 className="text-5xl font-heading font-black tracking-tight text-foreground">Resource Hub</h1>
        <p className="text-xl text-muted-foreground font-semibold mt-3">Manage links and files for each of your subjects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {subjectData.map((subject) => (
          <Link 
            key={subject.name} 
            href={`/resources/${encodeURIComponent(subject.name)}`}
            className="group block"
          >
            <div className="bg-card border border-border/60 p-8 rounded-[40px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden h-full flex flex-col">
              {/* Decorative Icon */}
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                <BookOpen size={120} />
              </div>

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="p-4 bg-primary/10 rounded-[24px] text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <BookOpen className="w-6 h-6" />
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>

              <h3 className="text-2xl font-heading font-black mb-6 relative z-10 line-clamp-1 group-hover:text-primary transition-colors">
                {subject.name}
              </h3>

              {/* Mastery Progress in Card */}
              <div className="space-y-3 mb-8 relative z-10">
                 <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    <span className="flex items-center gap-1.5"><GraduationCap className="w-3 h-3" /> Mastery</span>
                    <span>{subject.masteryPercentage}%</span>
                 </div>
                 <div className="w-full h-2 bg-muted rounded-full overflow-hidden border border-border/40">
                    <div 
                      className="h-full bg-primary transition-all duration-1000 group-hover:bg-primary shadow-lg shadow-primary/20" 
                      style={{ width: `${subject.masteryPercentage}%` }}
                    />
                 </div>
              </div>
              
              <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-muted/50 px-4 py-2 rounded-xl border border-border/40 w-fit relative z-10">
                <FileText className="w-3.5 h-3.5" />
                {subject.resourceCount} {subject.resourceCount === 1 ? 'Resource' : 'Resources'}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {subjects.length === 0 && (
        <div className="text-center py-32 bg-muted/5 border-2 border-dashed border-border/40 rounded-[40px]">
          <h2 className="text-2xl font-heading font-bold text-muted-foreground">No subjects found.</h2>
          <p className="text-muted-foreground mt-2">Go to Manage Schedule to add your first study block!</p>
        </div>
      )}
    </div>
  );
}
