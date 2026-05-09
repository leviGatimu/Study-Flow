'use client';

import { useState, useTransition } from 'react';
import { addResource } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Link as LinkIcon, FileUp, Info } from 'lucide-react';

export function AddResourceForm({ subject }: { subject: string }) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [type, setType] = useState<'LINK' | 'FILE'>('LINK');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('subject', subject);
    formData.append('type', type);

    startTransition(async () => {
      await addResource(formData);
      setOpen(false);
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-2xl h-12 px-6 font-heading font-black shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95 text-base gap-2">
          <Plus className="w-5 h-5" /> Add New Resource
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl rounded-[32px] p-0 overflow-hidden border shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="bg-card">
          <DialogHeader className="p-8 border-b bg-muted/20">
            <DialogTitle className="text-3xl font-heading font-black text-foreground">Add Resource</DialogTitle>
            <p className="text-muted-foreground font-medium mt-1">Upload a file or save a link for <span className="text-primary font-bold">{subject}</span>.</p>
          </DialogHeader>

          <div className="p-8">
            <Tabs defaultValue="LINK" onValueChange={(v: string) => setType(v as any)} className="w-full">
              <TabsList className="grid w-full grid-cols-2 rounded-2xl h-14 bg-muted/50 p-1.5 mb-8">
                <TabsTrigger value="LINK" className="rounded-xl font-bold gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
                  <LinkIcon className="w-4 h-4" /> Web Link
                </TabsTrigger>
                <TabsTrigger value="FILE" className="rounded-xl font-bold gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
                  <FileUp className="w-4 h-4" /> Local File
                </TabsTrigger>
              </TabsList>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-xs font-black text-muted-foreground uppercase tracking-widest ml-1">Resource Title</Label>
                  <Input 
                    name="title" 
                    required 
                    className="h-12 rounded-xl bg-muted/30 border-border/60 font-bold px-4" 
                    placeholder="e.g. Textbook Chapter 4, Lecture Notes..." 
                  />
                </div>

                <TabsContent value="LINK" className="mt-0 space-y-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-black text-muted-foreground uppercase tracking-widest ml-1">URL / Link</Label>
                    <Input 
                      name="url" 
                      required={type === 'LINK'} 
                      type="url"
                      className="h-12 rounded-xl bg-muted/30 border-border/60 font-bold px-4" 
                      placeholder="https://google.com/..." 
                    />
                  </div>
                </TabsContent>

                <TabsContent value="FILE" className="mt-0 space-y-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-black text-muted-foreground uppercase tracking-widest ml-1">Upload File</Label>
                    <div className="relative">
                      <Input 
                        name="file" 
                        required={type === 'FILE'} 
                        type="file"
                        className="h-12 rounded-xl bg-muted/30 border-border/60 font-bold px-4 pt-2 cursor-pointer file:hidden" 
                      />
                      <FileUp className="absolute right-4 top-3.5 w-5 h-5 text-muted-foreground pointer-events-none" />
                    </div>
                    <p className="text-[10px] text-muted-foreground flex items-center gap-1.5 ml-1 mt-2">
                      <Info className="w-3 h-3" /> Files are stored locally in your project uploads folder.
                    </p>
                  </div>
                </TabsContent>

                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="ghost" 
                    type="button" 
                    onClick={() => setOpen(false)} 
                    className="flex-1 h-12 rounded-xl font-bold text-muted-foreground"
                  >
                    Cancel
                  </Button>
                  <Button 
                    disabled={isPending} 
                    type="submit" 
                    className="flex-[2] h-12 rounded-xl font-heading font-black shadow-lg shadow-primary/20 transition-all"
                  >
                    {isPending ? 'Saving...' : 'Save Resource'}
                  </Button>
                </div>
              </form>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
