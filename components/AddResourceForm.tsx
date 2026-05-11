'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Link as LinkIcon, FileText, UploadCloud, Loader2 } from 'lucide-react';
import { addResource } from '@/lib/actions';

export function AddResourceForm({ subject }: { subject: string }) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'LINK' | 'FILE'>('LINK');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.currentTarget);
    formData.append('subject', subject);
    formData.append('type', type);
    
    try {
      await addResource(formData);
      setOpen(false);
    } catch (error) {
      console.error(error);
      alert('Failed to add resource. Make sure file size is reasonable.');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-10 rounded-2xl font-black text-[10px] uppercase tracking-widest border-border/60 hover:bg-primary/10 hover:text-primary transition-all">
          <Plus className="w-3.5 h-3.5 mr-2" /> Add Material
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-[32px] p-8 border shadow-2xl animate-in zoom-in-95 duration-300">
        <DialogHeader>
          <DialogTitle className="text-3xl font-heading font-black tracking-tighter">Add Resource</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Title</Label>
            <Input name="title" placeholder="e.g., Chapter 1 Notes" required className="h-12 rounded-2xl bg-muted/30 border-border/40 font-bold px-4" />
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Resource Type</Label>
            <Select value={type} onValueChange={(val: 'LINK' | 'FILE') => setType(val)}>
              <SelectTrigger className="h-12 rounded-2xl bg-muted/30 border-border/40 font-bold">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="rounded-2xl border-border/40 font-bold">
                <SelectItem value="LINK" className="rounded-xl">Web Link / URL</SelectItem>
                <SelectItem value="FILE" className="rounded-xl">PDF / Document File</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {type === 'LINK' ? (
            <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">URL</Label>
              <div className="relative">
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input name="url" type="url" placeholder="https://..." required className="h-12 rounded-2xl bg-muted/30 border-border/40 font-bold pl-12" />
              </div>
            </div>
          ) : (
            <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Upload File</Label>
              <div className="relative group">
                <Input name="file" type="file" required className="h-24 rounded-2xl bg-muted/30 border-2 border-dashed border-border/40 font-bold p-8 flex items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors file:hidden" />
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-muted-foreground group-hover:text-primary transition-colors">
                  <UploadCloud className="w-6 h-6 mb-2" />
                  <span className="text-xs font-black uppercase tracking-widest">Select PDF or Image</span>
                </div>
              </div>
            </div>
          )}

          <Button type="submit" disabled={isPending} className="w-full h-14 rounded-2xl font-heading font-black shadow-lg shadow-primary/20 gap-2">
            {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : type === 'FILE' ? <FileText className="w-5 h-5" /> : <LinkIcon className="w-5 h-5" />}
            {isPending ? 'UPLOADING...' : 'ADD TO REPOSITORY'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
