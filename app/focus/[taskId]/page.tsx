import { getTaskById, getResources } from '@/lib/actions';
import { FocusTimer } from '@/components/FocusTimer';
import { PDFViewer } from '@/components/PDFViewer';
import { notFound } from 'next/navigation';
import { BookOpen, Link as LinkIcon, FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function FocusPage({ params }: { params: { taskId: string } }) {
  const task = await getTaskById(params.taskId);
  
  if (!task) {
    notFound();
  }

  const resources = await getResources(task.subject);

  return (
    <div className="min-h-screen flex flex-col animate-in fade-in duration-700 max-w-[1400px] mx-auto pb-20">
      {/* Top Header */}
      <div className="flex items-center justify-between pt-8 pb-6 border-b border-border/40">
        <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-bold group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>
        <div className="flex items-center gap-3">
          <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border
            ${task.type === 'HOMEWORK' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-orange-500/10 text-orange-600 border-orange-500/20'}`}>
            {task.type}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 mt-12">
        {/* Main Timer Column */}
        <div className="xl:col-span-8 flex flex-col items-center">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-6xl font-heading font-black tracking-tight text-foreground">{task.subject}</h1>
            <p className="text-xl text-muted-foreground font-medium">Currently in Focus Mode. No distractions allowed.</p>
          </div>

          <FocusTimer endTime={task.endTime || (task.template ? task.template.endTime : '00:00')} />
        </div>

        {/* Resources Sidebar Column */}
        <div className="xl:col-span-4 space-y-8">
          <div className="bg-card border border-border/60 rounded-[32px] p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <h2 className="text-2xl font-heading font-black text-foreground">Resources</h2>
              <div className="p-2 bg-primary/10 rounded-xl text-primary">
                <BookOpen className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              {resources.length === 0 ? (
                <div className="py-12 border-2 border-dashed border-border/40 rounded-2xl flex flex-col items-center justify-center text-center text-muted-foreground">
                  <FileText className="w-10 h-10 mb-3 opacity-20" />
                  <p className="text-sm font-medium px-4">No resources uploaded for this subject yet.</p>
                  <Link href={`/resources/${encodeURIComponent(task.subject)}`} className="mt-4 text-xs font-bold text-primary underline underline-offset-4">
                    Add Resources
                  </Link>
                </div>
              ) : (
                resources.map((res) => (
                  <div 
                    key={res.id} 
                    className="flex items-center justify-between p-4 bg-muted/40 hover:bg-muted/80 rounded-2xl border border-border/40 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl ${res.type === 'FILE' ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'}`}>
                        {res.type === 'FILE' ? <FileText className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
                      </div>
                      <span className="font-bold text-sm text-foreground line-clamp-1 group-hover:text-primary transition-colors">{res.title}</span>
                    </div>
                    <PDFViewer url={res.url} title={res.title} />
                  </div>
                ))
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-border/40 relative z-10">
               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-center">
                 Study Flow Focus Mode
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
