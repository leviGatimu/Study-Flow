import { getResources, getMasteryItems } from '@/lib/actions';
import { AddResourceForm } from '@/components/AddResourceForm';
import { DeleteResourceButton } from '@/components/DeleteResourceButton';
import { PDFViewer } from '@/components/PDFViewer';
import { AddMasteryForm } from '@/components/AddMasteryForm';
import { MasteryList } from '@/components/MasteryList';
import { FileIcon, LinkIcon, GraduationCap, FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function SubjectResourcesPage({ params }: { params: Promise<{ subject: string }> }) {
  const resolvedParams = await params;
  const subject = decodeURIComponent(resolvedParams.subject);
  
  const resources = await getResources(subject);
  const masteryItems = await getMasteryItems(subject);

  const completedMastery = masteryItems.filter(i => i.isCompleted).length;
  const totalMastery = masteryItems.length;
  const masteryPercentage = totalMastery === 0 ? 0 : Math.round((completedMastery / totalMastery) * 100);

  return (
    <div className="space-y-12 max-w-[1400px] mx-auto animate-in fade-in duration-500 pb-16">
      {/* Header with Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 pb-4 border-b border-border/40">
        <div>
          <div className="flex items-center gap-2 text-muted-foreground font-bold mb-2 uppercase tracking-widest text-xs">
            <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1">
               <ArrowLeft className="w-3 h-3" /> Resource Hub
            </Link>
            <span>/</span>
            <span className="text-foreground">{subject}</span>
          </div>
          <h1 className="text-5xl font-heading font-black tracking-tight text-foreground">{subject}</h1>
          <p className="text-xl text-muted-foreground font-semibold mt-3">Access materials and track your syllabus progress.</p>
        </div>
        <AddResourceForm subject={subject} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
        {/* Left Column: Resources */}
        <div className="xl:col-span-7 space-y-8">
           <div className="flex items-center justify-between">
            <h2 className="text-3xl font-heading font-bold tracking-tight flex items-center gap-3">
              <FileText className="text-primary w-8 h-8" /> Resources
            </h2>
            <span className="text-sm font-bold bg-muted px-4 py-1 rounded-full text-muted-foreground border border-border/40">
              {resources.length} Items
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.length === 0 ? (
              <div className="col-span-full py-20 border-2 border-dashed border-border/40 rounded-[40px] flex flex-col items-center justify-center text-muted-foreground bg-muted/5">
                <p className="font-bold text-lg text-center px-6">No resources uploaded for {subject} yet.</p>
              </div>
            ) : (
              resources.map((resource) => (
                <div key={resource.id} className="group bg-card border border-border/60 p-6 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex items-center justify-between gap-4">
                  <div className="flex items-center gap-5 relative z-10">
                    <div className={`p-4 rounded-2xl ${resource.type === 'FILE' ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'}`}>
                      {resource.type === 'FILE' ? <FileIcon className="w-6 h-6" /> : <LinkIcon className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-black text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {resource.title}
                      </h3>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-1">
                        {resource.type === 'FILE' ? 'Document' : 'Link'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 relative z-10">
                    <PDFViewer url={resource.url} title={resource.title} />
                    <DeleteResourceButton id={resource.id} subject={subject} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Column: Mastery / Syllabus Progress */}
        <div className="xl:col-span-5 space-y-8">
          <div className="bg-card border border-border/60 rounded-[40px] p-8 shadow-sm relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <h2 className="text-3xl font-heading font-bold tracking-tight flex items-center gap-3">
                <GraduationCap className="text-primary w-8 h-8" /> Mastery
              </h2>
              <div className="flex flex-col items-end">
                <span className="text-4xl font-heading font-black text-primary">{masteryPercentage}%</span>
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Syllabus Progress</span>
              </div>
            </div>

            {/* Mastery Progress Bar */}
            <div className="w-full h-4 bg-muted rounded-full overflow-hidden mb-8 relative z-10 border border-border/40 shadow-inner">
               <div 
                 className="h-full bg-primary transition-all duration-1000 ease-out shadow-lg shadow-primary/20"
                 style={{ width: `${masteryPercentage}%` }}
               />
            </div>

            {/* Add Topic Form */}
            <div className="mb-8 relative z-10">
              <AddMasteryForm subject={subject} />
            </div>

            {/* Mastery List */}
            <div className="relative z-10">
              <MasteryList items={masteryItems as any} subject={subject} />
            </div>

            <div className="mt-auto pt-8 text-center border-t border-border/40 mt-8 relative z-10">
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                {completedMastery} of {totalMastery} topics mastered
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
