import { getProjects } from '@/lib/project-actions';
import { ProjectList } from './ProjectList';
import { Plus, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-12 max-w-[1400px] mx-auto animate-in fade-in duration-500 pb-16">
      <div className="pt-6 pb-2 border-b border-border/40 flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-heading font-black tracking-tight text-foreground">Project Hub</h1>
          <p className="text-xl text-muted-foreground font-semibold mt-3">Design, Document, and Deliver.</p>
        </div>
        <ProjectCreateButton />
      </div>

      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 bg-muted/5 border-2 border-dashed border-border/40 rounded-[40px] text-center">
          <Rocket className="w-16 h-16 text-muted-foreground/20 mb-6" />
          <h2 className="text-2xl font-heading font-bold text-muted-foreground">No projects yet.</h2>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">Start your first venture today. Your AI Buddy is ready to help you plan.</p>
          <ProjectCreateButton className="mt-8" />
        </div>
      ) : (
        <ProjectList initialProjects={projects as any} />
      )}
    </div>
  );
}

function ProjectCreateButton({ className }: { className?: string }) {
  return (
    <DialogTriggerButton className={className} />
  );
}

// Separate component for client-side dialog
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CreateProjectForm } from './CreateProjectForm';

function DialogTriggerButton({ className }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("h-14 rounded-2xl font-bold px-8 shadow-lg shadow-primary/20 gap-2", className)}>
          <Plus className="w-5 h-5" /> START NEW PROJECT
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl rounded-[32px] p-8 border shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-heading font-black">New Project</DialogTitle>
        </DialogHeader>
        <CreateProjectForm />
      </DialogContent>
    </Dialog>
  );
}

import { cn } from '@/lib/utils';
