'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Rocket, Shield, Clock, BarChart3, 
  Target, Zap, CheckCircle2, ChevronRight,
  BookOpen, BrainCircuit, LayoutGrid, Calendar,
  FolderOpen, Flame, GraduationCap
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function WelcomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div ref={containerRef} className="bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10vw] left-[-10vw] w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-[0.15] bg-primary animate-pulse" />
        <div className="absolute bottom-[-10vw] right-[-10vw] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-[0.15] bg-blue-600" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 max-w-[1400px] mx-auto px-8 py-10 flex items-center justify-between z-50">
          <div className="flex items-center gap-3 font-heading font-black text-2xl text-primary">
            <div className="p-2 bg-primary/10 rounded-xl">
              <BrainCircuit className="h-8 w-8" />
            </div>
            <span>Study Flow</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/login" className="text-sm font-bold hover:text-primary transition-colors hidden sm:block">Sign In</Link>
            <Link href="/register">
              <Button className="font-heading font-black rounded-2xl px-8 h-12 shadow-xl shadow-primary/20 active:scale-95 transition-all">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>

        <motion.div 
          style={{ opacity, scale }}
          className="max-w-5xl mx-auto text-center space-y-10 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] text-primary"
          >
            <Zap className="w-3.5 h-3.5 fill-current" /> Next-Gen Academic Workstation
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-7xl md:text-9xl font-heading font-black tracking-tight leading-[0.85] text-foreground"
          >
            Master your <br />
            <span className="text-primary italic">academic flow.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed"
          >
            An elite workstation for students who demand more. Automated scheduling, deep focus environments, and visual mastery tracking.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-6"
          >
            <Link href="/register">
              <Button className="h-20 px-12 rounded-[28px] text-2xl font-heading font-black shadow-2xl shadow-primary/30 active:scale-95 transition-all gap-4">
                Start Today <Rocket className="w-7 h-7" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" className="h-20 px-12 rounded-[28px] text-2xl font-heading font-black border-border/60 hover:bg-muted active:scale-95 transition-all">
                Login
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-4 text-muted-foreground/40 font-black text-[10px] uppercase tracking-[0.4em]"
        >
          Scroll to Explore
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </section>

      {/* Feature Showcase: Timetable & Calendar */}
      <section className="min-h-screen py-40 px-8 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="p-4 bg-blue-500/10 rounded-[32px] w-fit text-blue-600">
              <LayoutGrid className="w-10 h-10" />
            </div>
            <h2 className="text-6xl font-heading font-black tracking-tighter leading-tight">
              A Bird&apos;s Eye View of <br />
              <span className="text-blue-600">Your Success.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-lg">
              Toggle between a high-precision Weekly Timetable and a beautiful monthly Calendar. 
              Manage your sessions, mark deadlines, and move sessions with fluid drag-and-drop intuition.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-lg font-bold">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                Smart School Hours Integration
              </li>
              <li className="flex items-center gap-4 text-lg font-bold">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                Automatic Break Detection
              </li>
            </ul>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full translate-x-20" />
             <div className="relative bg-card border border-border/60 rounded-[48px] p-8 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="space-y-6">
                   <div className="flex items-center gap-3 border-b border-border/40 pb-6">
                      <div className="w-3 h-3 rounded-full bg-blue-400" />
                      <div className="w-3 h-3 rounded-full bg-blue-300" />
                      <div className="w-3 h-3 rounded-full bg-blue-200" />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-24 bg-muted/40 rounded-3xl border border-border/40" />
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase: Focus Mode */}
      <section className="min-h-screen py-40 px-8 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full" />
             <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[48px] p-12 shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-700 flex flex-col items-center gap-10">
                <div className="text-8xl font-heading font-black text-orange-500 drop-shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                  45:00
                </div>
                <div className="flex gap-4 w-full">
                  <div className="flex-1 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,1)]" />
                  <div className="flex-1 h-2 bg-white/10 rounded-full" />
                </div>
             </div>
          </div>
          <div className="space-y-10 order-1 lg:order-2">
            <div className="p-4 bg-orange-500/10 rounded-[32px] w-fit text-orange-500">
              <Flame className="w-10 h-10" />
            </div>
            <h2 className="text-6xl font-heading font-black tracking-tighter leading-tight">
              Destroy Distractions. <br />
              <span className="text-orange-500 italic">Enter the Zone.</span>
            </h2>
            <p className="text-xl text-white/60 font-medium leading-relaxed max-w-lg">
              Our full-screen Focus Mode is a distraction-free sanctuary. 
              Integrated ambient soundscapes and session goals ensure you finish what you start.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/10 px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest border border-white/10">Binaural Beats</span>
              <span className="bg-white/10 px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest border border-white/10">Rain Ambience</span>
              <span className="bg-white/10 px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest border border-white/10">Goal Checklists</span>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & Mastery */}
      <section className="min-h-screen py-40 px-8 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center space-y-20">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-6xl font-heading font-black tracking-tighter leading-tight">
              Data-Driven <span className="text-primary italic">Mastery.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              We turn your efforts into visual progress. Track your syllabus completion and maintain a legendary streak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border/60 p-10 rounded-[48px] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center">
               <BarChart3 className="w-12 h-12 text-primary mb-8" />
               <h3 className="text-2xl font-heading font-black mb-4">Performance Analytics</h3>
               <p className="text-muted-foreground font-medium">Visual charts showing your study habits over 14 days.</p>
            </div>
            <div className="bg-card border border-border/60 p-10 rounded-[48px] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center">
               <GraduationCap className="w-12 h-12 text-primary mb-8" />
               <h3 className="text-2xl font-heading font-black mb-4">Syllabus Progress</h3>
               <p className="text-muted-foreground font-medium">Master subjects topic-by-topic with visual mastery bars.</p>
            </div>
            <div className="bg-card border border-border/60 p-10 rounded-[48px] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center">
               <FolderOpen className="w-12 h-12 text-primary mb-8" />
               <h3 className="text-2xl font-heading font-black mb-4">Resource Hub</h3>
               <p className="text-muted-foreground font-medium">Attach PDFs and links directly to your academic routine.</p>
            </div>
          </div>

          <div className="pt-20">
             <Link href="/register">
               <Button className="h-20 px-16 rounded-[32px] text-3xl font-heading font-black shadow-2xl shadow-primary/40 active:scale-95 transition-all gap-4 animate-bounce">
                 Join Elite Students <ChevronRight className="w-8 h-8" />
               </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <footer className="py-40 px-8 text-center bg-muted/20 relative">
        <div className="max-w-4xl mx-auto space-y-10">
          <BrainCircuit className="w-16 h-16 text-primary/40 mx-auto" />
          <h2 className="text-5xl font-heading font-black tracking-tight">The future of academic performance is here.</h2>
          <div className="flex justify-center gap-4">
             <Link href="/register"><Button className="rounded-2xl h-14 px-8 font-bold">Register Now</Button></Link>
             <Link href="/login"><Button variant="outline" className="rounded-2xl h-14 px-8 font-bold">Sign In</Button></Link>
          </div>
          <p className="text-xs font-black text-muted-foreground/40 uppercase tracking-[0.4em] pt-20">
            © 2026 Study Flow Academic Workstation
          </p>
        </div>
      </footer>
    </div>
  );
}
