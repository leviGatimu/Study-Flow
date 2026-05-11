'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Volume2, VolumeX, Maximize2, Minimize2,
  Play, Pause, Flame, Zap, CheckCircle2,
  ArrowLeft, ListTodo, Trophy, BookOpen, FileText, Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { logFocusSession } from '@/lib/actions';
import Link from 'next/link';
import { TaskWithTemplate, Resource } from '@/lib/types';

interface FocusSessionProps {
  task: TaskWithTemplate;
  resources: Resource[];
}

export function FocusSessionUI({ task, resources }: FocusSessionProps) {
  const [step, setStep] = useState<'PREP' | 'FOCUS' | 'DONE'>('PREP');
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });
  const [isActive, setIsActive] = useState(false);
  const [intensity, setIntensity] = useState<'CHILL' | 'INTENSE'>('CHILL');
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [goals, setGoals] = useState<string[]>(['']);
  const [completedGoals, setCompletedGoals] = useState<boolean[]>([]);
  const [sessionXP, setSessionXP] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (task.startTime && task.endTime) {
        const [startH, startM] = task.startTime.split(':').map(Number);
        const [endH, endM] = task.endTime.split(':').map(Number);
        const diffMinutes = (endH * 60 + endM) - (startH * 60 + startM);
        const totalSeconds = diffMinutes * 60;
        
        if (totalSeconds > 0) {
          setTimeLeft({
            h: Math.floor(totalSeconds / 3600),
            m: Math.floor((totalSeconds % 3600) / 60),
            s: totalSeconds % 60
          });
        }
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [task.startTime, task.endTime]);

  const handleSessionComplete = useCallback(async () => {
    const [startH, startM] = task.startTime.split(':').map(Number);
    const [endH, endM] = task.endTime.split(':').map(Number);
    const duration = (endH * 60 + endM) - (startH * 60 + startM);
    await logFocusSession(duration > 0 ? duration : 60);
  }, [task.startTime, task.endTime]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && (timeLeft.h > 0 || timeLeft.m > 0 || timeLeft.s > 0)) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          const totalSeconds = prev.h * 3600 + prev.m * 60 + prev.s - 1;
          if (totalSeconds <= 0) {
            setIsActive(false);
            setStep('DONE');
            handleSessionComplete();
            return { h: 0, m: 0, s: 0 };
          }
          return {
            h: Math.floor(totalSeconds / 3600),
            m: Math.floor((totalSeconds % 3600) / 60),
            s: totalSeconds % 60
          };
        });
        setSessionXP(prev => prev + (intensity === 'INTENSE' ? 2 : 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, intensity, timeLeft, handleSessionComplete]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const addGoal = () => setGoals([...goals, '']);
  const updateGoal = (idx: number, val: string) => {
    const newGoals = [...goals];
    newGoals[idx] = val;
    setGoals(newGoals);
  };
  const toggleGoal = (idx: number) => {
    const newCompleted = [...completedGoals];
    newCompleted[idx] = !newCompleted[idx];
    setCompletedGoals(newCompleted);
  };

  if (step === 'PREP') {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 bg-background overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full space-y-12"
        >
          <div className="text-center space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-4">
              <ArrowLeft className="w-3 h-3" /> Back to Dashboard
            </Link>
            <h1 className="text-6xl font-heading font-black tracking-tighter">Ready to focus?</h1>
            <p className="text-xl text-muted-foreground font-semibold uppercase tracking-widest">{task.subject}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" /> Session Intensity
              </Label>
              <div className="flex gap-4">
                <button
                  onClick={() => setIntensity('CHILL')}
                  className={cn(
                    "flex-1 p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3",
                    intensity === 'CHILL' ? "bg-primary/5 border-primary text-primary shadow-lg shadow-primary/10" : "bg-card border-border/40 text-muted-foreground grayscale opacity-50"
                  )}
                >
                  <Volume2 className="w-8 h-8" />
                  <span className="font-bold">Chill Mode</span>
                </button>
                <button
                  onClick={() => setIntensity('INTENSE')}
                  className={cn(
                    "flex-1 p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3",
                    intensity === 'INTENSE' ? "bg-orange-500/5 border-orange-500 text-orange-600 shadow-lg shadow-orange-500/10" : "bg-card border-border/40 text-muted-foreground grayscale opacity-50"
                  )}
                >
                  <Zap className="w-8 h-8" />
                  <span className="font-bold">Deep Focus</span>
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <ListTodo className="w-3.5 h-3.5" /> Session Goals
              </Label>
              <div className="space-y-3">
                {goals.map((goal, idx) => (
                  <Input
                    key={idx}
                    value={goal}
                    onChange={(e) => updateGoal(idx, e.target.value)}
                    placeholder={`Goal #${idx + 1}...`}
                    className="h-12 rounded-xl bg-muted/30 border-border/40 font-bold px-4"
                  />
                ))}
                <Button variant="ghost" size="sm" onClick={addGoal} className="text-xs font-bold text-primary gap-1">
                   <Plus className="w-3 h-3" /> Add another goal
                </Button>
              </div>
            </div>
          </div>

          <Button 
            onClick={() => {
              setStep('FOCUS');
              setIsActive(true);
            }}
            className="w-full h-20 rounded-[32px] text-2xl font-heading font-black shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95"
          >
            ENTER FOCUS MODE
          </Button>
        </motion.div>
      </div>
    );
  }

  if (step === 'FOCUS') {
    return (
      <div 
        ref={containerRef}
        className={cn(
          "h-full flex flex-col bg-black text-white transition-all duration-1000 overflow-hidden relative",
          intensity === 'INTENSE' ? "bg-zinc-950" : "bg-slate-950"
        )}
      >
        {/* Background Visuals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full animate-pulse delay-1000" />
        </div>

        {/* Top Controls */}
        <div className="p-8 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-3 px-6 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-xl">
               <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
               <span className="font-black text-xl tabular-nums">{sessionXP} XP</span>
             </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10" onClick={() => setIsMuted(!isMuted)}>
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10" onClick={toggleFullscreen}>
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20" onClick={() => setIsActive(!isActive)}>
              {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
          <div className="flex flex-col items-center gap-12 text-center">
             <motion.div 
               key={timeLeft.s}
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="text-[16rem] font-heading font-black leading-none tracking-tighter tabular-nums flex items-baseline select-none"
             >
               {timeLeft.h > 0 && <span>{timeLeft.h.toString().padStart(2, '0')}:</span>}
               <span>{timeLeft.m.toString().padStart(2, '0')}</span>
               <span className="opacity-20">:</span>
               <span className="text-[0.6em]">{timeLeft.s.toString().padStart(2, '0')}</span>
             </motion.div>
             <div className="flex items-center gap-3 bg-white/10 px-8 py-3 rounded-full backdrop-blur-xl border border-white/10">
               <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
               <span className="text-sm font-black uppercase tracking-[0.3em]">{task.subject} Session Active</span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl w-full mt-24">
            {/* GOALS GRID */}
            <div className="space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/40 flex items-center gap-3">
                  <ListTodo className="w-4 h-4" /> Current Objectives
                </h3>
                <div className="grid grid-cols-1 gap-4">
                   {goals.filter(g => g.trim()).map((goal, i) => (
                     <motion.div
                       key={i}
                       whileHover={{ x: 5 }}
                       onClick={() => toggleGoal(i)}
                       className={cn(
                         "flex items-center gap-5 p-6 rounded-[24px] border transition-all cursor-pointer group",
                         completedGoals[i] ? "bg-primary/20 border-primary/50" : "bg-white/5 border-white/5 hover:bg-white/10"
                       )}
                     >
                       <div className={cn(
                         "w-6 h-6 rounded-lg border-2 transition-colors flex items-center justify-center",
                         completedGoals[i] ? "bg-primary border-primary" : "border-white/20 group-hover:border-primary"
                       )}>
                         {completedGoals[i] && <CheckCircle2 className="w-4 h-4 text-white" />}
                       </div>
                       <span className={cn(
                         "text-lg font-bold transition-all",
                         completedGoals[i] ? "text-white/40 line-through" : "text-white"
                       )}>{goal}</span>
                     </motion.div>
                   ))}
                </div>
            </div>

            {/* RESOURCES GRID */}
            <div className="space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/40 flex items-center gap-3">
                  <BookOpen className="w-4 h-4" /> Quick Access
                </h3>
                <div className="grid grid-cols-1 gap-4">
                   {resources.length === 0 ? (
                      <div className="p-8 border-2 border-dashed border-white/5 rounded-[24px] text-center text-white/20 font-bold uppercase tracking-widest text-xs">
                        No resources attached
                      </div>
                   ) : (
                     resources.map((res) => (
                        <a 
                          key={res.id}
                          href={res.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between p-6 rounded-[24px] border border-white/5 bg-white/5 hover:bg-white/10 transition-all group"
                        >
                           <div className="flex items-center gap-4">
                              <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                                {res.type === 'FILE' ? <FileText className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                              </div>
                              <span className="font-bold">{res.title}</span>
                           </div>
                           <ArrowLeft className="w-4 h-4 rotate-180 opacity-0 group-hover:opacity-100 transition-all" />
                        </a>
                     ))
                   )}
                </div>
            </div>
          </div>
        </div>

        {/* Hidden Audio */}
        <audio 
          ref={audioRef}
          src={intensity === 'INTENSE' ? "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" : "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"}
          loop
          muted={isMuted || !isActive}
          autoPlay
        />
      </div>
    );
  }

  if (step === 'DONE') {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 bg-background relative overflow-hidden">
        {/* Confetti simulation would go here */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/5 blur-[120px] rounded-full animate-pulse" />

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-xl w-full text-center space-y-12 relative z-10"
        >
          <div className="space-y-6">
            <div className="w-32 h-32 bg-primary/10 rounded-[40px] flex items-center justify-center mx-auto mb-8 border border-primary/20 shadow-2xl shadow-primary/20">
              <Trophy className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-7xl font-heading font-black tracking-tighter leading-none">Victory!</h1>
            <p className="text-2xl text-muted-foreground font-semibold">You absolutely crushed that session.</p>
          </div>

          <div className="bg-card border border-border/60 p-8 rounded-[40px] shadow-xl">
             <div className="flex justify-between items-center mb-8">
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">XP EARNED</p>
                  <p className="text-4xl font-heading font-black text-primary">+{sessionXP}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">STREAK</p>
                  <p className="text-4xl font-heading font-black text-orange-500 flex items-center gap-2">
                    <Flame className="w-8 h-8 fill-orange-500" /> +1
                  </p>
                </div>
             </div>
             
             <div className="space-y-4">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest mb-1">
                  <span>Level Progress</span>
                  <span className="text-primary">XP BOOST ACTIVE</span>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden shadow-inner border border-border/40">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    className="h-full bg-primary"
                  />
                </div>
             </div>
          </div>

          <Link href="/">
            <Button className="w-full h-20 rounded-[32px] text-2xl font-heading font-black shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-transform">
              RETURN TO DASHBOARD
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return null;
}
