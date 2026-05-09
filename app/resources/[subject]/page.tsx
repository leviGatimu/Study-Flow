import { getResources } from '@/lib/actions';
import { AddResourceForm } from '@/components/AddResourceForm';
import { DeleteResourceButton } from '@/components/DeleteResourceButton';
import { PDFViewer } from '@/components/PDFViewer';
import { FileIcon, LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default async function SubjectResourcesPage({ params }: { params: { subject: string } }) {
  const subject = decodeURIComponent(params.subject);
  const resources = await getResources(subject);

  return (
    <div className="space-y-12 max-w-[1200px] mx-auto animate-in fade-in duration-500 pb-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 pb-4 border-b border-border/40">
        <div>
          <div className="flex items-center gap-2 text-muted-foreground font-bold mb-2 uppercase tracking-widest text-xs">
            <Link href="/resources" className="hover:text-primary transition-colors">Resource Hub</Link>
            <span>/</span>
            <span className="text-foreground">{subject}</span>
          </div>
          <h1 className="text-5xl font-heading font-black tracking-tight text-foreground">{subject}</h1>
          <p className="text-xl text-muted-foreground font-semibold mt-3">Access and manage all materials for this subject.</p>
        </div>
        <AddResourceForm subject={subject} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.length === 0 ? (
          <div className="col-span-full py-32 border-2 border-dashed border-border/40 rounded-[40px] flex flex-col items-center justify-center text-muted-foreground bg-muted/5">
            <h2 className="text-2xl font-heading font-bold">No resources yet.</h2>
            <p className="mt-2">Start by adding a link or uploading a file for this subject.</p>
          </div>
        ) : (
          resources.map((resource) => (
            <div key={resource.id} className="group bg-card border border-border/60 p-6 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex items-center justify-between gap-4">
              <div className="flex items-center gap-5 relative z-10">
                <div className={`p-4 rounded-2xl ${resource.type === 'FILE' ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'}`}>
                  {resource.type === 'FILE' ? <FileIcon className="w-6 h-6" /> : <LinkIcon className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-black text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {resource.title}
                  </h3>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">
                    {resource.type === 'FILE' ? 'Local Document' : 'External Link'}
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
  );
}
