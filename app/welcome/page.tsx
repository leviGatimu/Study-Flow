'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Rocket, Shield, Clock, BarChart3, 
  Target, Zap, CheckCircle2, ChevronRight,
  BookOpen, BrainCircuit
} from 'lucide-react';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient background copy (since layout might be restricted) */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10vw] left-[-10vw] w-[60vw] h-[60vw] rounded-full blur-[100px] opacity-20 bg-primary/30 animate-pulse" />
        <div className="absolute bottom-[-10vw] right-[-10vw] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-20 bg-blue-500/20" />
      </div>

      <main className="max-w-[1400px] mx-auto px-8 py-20 relative z-10">
        
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-24">
          <div className="flex items-center gap-3 font-heading font-black text-2xl text-primary">
            <div className="p-2 bg-primary/10 rounded-xl">
              <BrainCircuit className="h-8 w-8" />
            </div>
            <span>Study Flow</span>
          </div>
          <Link href="/login">
            <Button variant="ghost" className="font-bold rounded-full px-8 hover:bg-primary/10">
              Login
            </Button>
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-primary">
              <Zap className="w-3 h-3 fill-current" /> Next-Gen Academic Workstation
            </div>
            <h1 className="text-7xl xl:text-8xl font-heading font-black tracking-tight leading-[0.9] text-foreground">
              Master your <br />
              <span className="text-primary italic">studies.</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium max-w-xl leading-relaxed">
              Experience the ultimate all-in-one workstation for elite students. 
              Automated scheduling, deep focus tracking, and performance analytics 
              designed to keep you ahead.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/register">
                <Button className="h-16 px-10 rounded-2xl text-xl font-heading font-black shadow-2xl shadow-primary/30 active:scale-95 transition-all gap-3">
                  Start Today <Rocket className="w-6 h-6" />
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" className="h-16 px-10 rounded-2xl text-xl font-heading font-black border-border/60 hover:bg-muted active:scale-95 transition-all">
                  Sign In
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
            <div className="relative glass border-white/20 dark:border-white/5 rounded-[48px] p-8 shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
               <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-[10px] font-black tracking-widest text-muted-foreground uppercase">Workstation Dashboard</span>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-16 bg-white/5 rounded-2xl border border-white/5 flex items-center px-6 justify-between">
                         <div className="flex items-center gap-4">
                           <div className="w-6 h-6 rounded-lg border-2 border-white/20" />
                           <div className="h-3 w-32 bg-white/10 rounded-full" />
                         </div>
                         <div className="h-6 w-20 bg-primary/20 rounded-full" />
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <FeatureCard 
             icon={<Target className="w-8 h-8" />} 
             title="Focus Tracking" 
             desc="Massive full-screen timer with integrated ambient soundscapes."
           />
           <FeatureCard 
             icon={<BarChart3 className="w-8 h-8" />} 
             title="Elite Analytics" 
             desc="Visual charts and Duolingo-style streaks to keep you motivated."
           />
           <FeatureCard 
             icon={<Shield className="w-8 h-8" />} 
             title="Private & Secure" 
             desc="Your data is yours. Secure accounts with isolated academic routines."
           />
        </section>

      </main>

      {/* Footer */}
      <footer className="text-center py-20 border-t border-border/40 text-muted-foreground font-bold text-xs uppercase tracking-[0.3em]">
        © 2026 Study Flow Academic System
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-card border border-border/60 p-10 rounded-[40px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
      <div className="p-4 bg-primary/10 rounded-3xl text-primary w-fit mb-8">
        {icon}
      </div>
      <h3 className="text-2xl font-heading font-black mb-4 tracking-tight">{title}</h3>
      <p className="text-muted-foreground font-medium leading-relaxed">{desc}</p>
    </div>
  );
}
