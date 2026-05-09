import { getUniqueSubjects, getResources } from '@/lib/actions';
import Link from 'next/link';
import { BookOpen, ChevronRight, FileText } from 'lucide-react';

export default async function ResourcesPage() {
  const subjects = await getUniqueSubjects();

  // Fetch resource counts for each subject
  const subjectData = await Promise.all(subjects.map(async (name) => {
    const resources = await getResources(name);
    return { name, count: resources.length };
  }));

  return (
    <div className="space-y-12 max-w-[1400px] mx-auto animate-in fade-in duration-500 pb-16">
      <div className="pt-6 pb-2 border-b border-border/40">
        <h1 className="text-5xl font-heading font-black tracking-tight text-foreground">Resource Hub</h1>
        <p className="text-xl text-muted-foreground font-semibold mt-3">Manage links and files for each of your subjects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {subjectData.map((subject) => (
          <Link 
            key={subject.name} 
            href={`/resources/${encodeURIComponent(subject.name)}`}
            className="group block"
          >
            <div className="bg-card border border-border/60 p-6 rounded-[32px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
              {/* Decorative Icon */}
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                <BookOpen size={120} />
              </div>

              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>

              <h3 className="text-2xl font-heading font-black mb-2 relative z-10 line-clamp-1 group-hover:text-primary transition-colors">
                {subject.name}
              </h3>
              
              <div className="mt-auto flex items-center gap-2 text-sm font-bold text-muted-foreground bg-muted/50 px-4 py-2 rounded-xl border border-border/40 w-fit relative z-10">
                <FileText className="w-3.5 h-3.5" />
                {subject.count} {subject.count === 1 ? 'Resource' : 'Resources'}
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
