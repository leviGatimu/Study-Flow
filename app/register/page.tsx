'use client';

import { useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Rocket, ShieldCheck, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { registerUser } from '@/lib/actions';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      const result = await registerUser(formData);
      if (result?.error) {
        setError(result.error);
      } else {
        router.push('/');
        router.refresh();
      }
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10vw] right-[-10vw] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-20 bg-primary/30" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="bg-card border border-border/60 rounded-[48px] p-10 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           
           <div className="flex flex-col items-center text-center mb-10">
              <div className="p-4 bg-primary/10 rounded-3xl text-primary mb-6">
                <Rocket className="h-10 w-10" />
              </div>
              <h1 className="text-4xl font-heading font-black tracking-tight text-foreground mb-2">New Station</h1>
              <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Initialize Your Workstation</p>
           </div>

           <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-2xl flex items-center gap-3 text-destructive text-sm font-bold animate-in shake-in-1 duration-300">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Username</Label>
                <Input 
                  name="username" 
                  required 
                  placeholder="Choose a username" 
                  className="h-14 rounded-2xl bg-muted/30 border-border/60 font-bold px-6 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Password</Label>
                <Input 
                  name="password" 
                  type="password" 
                  required 
                  placeholder="Set a strong password" 
                  className="h-14 rounded-2xl bg-muted/30 border-border/60 font-bold px-6 focus:ring-primary/20"
                />
              </div>

              <Button 
                disabled={isPending}
                className="w-full h-16 rounded-[24px] text-xl font-heading font-black shadow-xl shadow-primary/20 active:scale-95 transition-all gap-3 mt-4"
              >
                {isPending ? "Creating..." : <>Start Today <ShieldCheck className="w-6 h-6" /></>}
              </Button>
           </form>

           <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground font-medium">
                Already registered? <Link href="/login" className="text-primary font-bold hover:underline underline-offset-4">Sign In Instead</Link>
              </p>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
