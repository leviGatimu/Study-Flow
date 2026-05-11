'use client';

import { FolderOpen, ChevronRight, MoreVertical, Trash2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { deleteProject } from '@/lib/project-actions';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  description: string | null;
  progress: number;
  updatedAt: Date;
};

export function ProjectList({ initialProjects }: { initialProjects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {initialProjects.map((project) => (
        <div 
          key={project.id} 
          className="group bg-card border border-border/60 p-8 rounded-[40px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="p-4 bg-primary/10 rounded-3xl text-primary">
              <FolderOpen className="w-6 h-6" />
            </div>
            <button 
              onClick={async () => {
                if (confirm('Delete this project?')) {
                  await deleteProject(project.id);
                  window.location.reload();
                }
              }}
              className="p-2 text-muted-foreground hover:text-destructive transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

          <h3 className="text-2xl font-heading font-black mb-3">{project.title}</h3>
          <p className="text-muted-foreground font-medium line-clamp-2 mb-8 flex-1">
            {project.description || 'No description provided.'}
          </p>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Progress</span>
              <span className="text-lg font-heading font-black text-primary">{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2 rounded-full bg-muted" />
          </div>

          <Link href={`/projects/${project.id}`} className="mt-8">
            <Button variant="outline" className="w-full h-14 rounded-2xl font-bold border-border/60 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all gap-2">
              OPEN PROJECT <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
