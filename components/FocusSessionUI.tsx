'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, VolumeX, Maximize2, Minimize2, 
  Play, Pause, Flame, Zap, CheckCircle2, 
  ArrowLeft, ListTodo, X, Trophy, BookOpen, FileText, Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { logFocusSession } from '@/lib/actions';
import Link from 'next/link';

interface FocusSessionProps {
  task: any;
  resources: any[];
}

export function FocusSessionUI({ task, resources }: FocusSessionProps) {
  const [step, setStep] = useState<'PREP' | 'FOCUS' | 'DONE'>('PREP');
  const [intensity, setIntensity] = useState<'NORMAL' | 'INTENSE'>('NORMAL');
  const [goals, setGoals] = useState<string[]>(['']);
  const [completedGoals, setCompletedGoals] = useState<boolean[]>([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [audioSource, setAudioSource] = useState('RAIN');
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync Timer
  useEffect(() => {
    if (step !== 'FOCUS') return;

    const calculateTime = () => {
      const now = new Date();
      const [endH, endM] = (task.endTime || '00:00').split(':').map(Number);
      const end = new Date();
      end.setHours(endH, endM, 0, 0);

      const diff = end.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ h: 0, m: 0, s: 0 });
        setStep(prev => {
          if (prev !== 'DONE') {
            const [startH, startM] = (task.startTime || '00:00').split(':').map(Number);
            const [endH, endM] = (task.endTime || '00:00').split(':').map(Number);
            let duration = (endH * 60 + endM) - (startH * 60 + startM);
            if (duration < 0) duration += 24 * 60;
            logFocusSession(duration > 0 ? duration : 0);
          }
          return 'DONE';
        });
        return;
      }

      setTimeLeft({
        h: Math.floor(diff / (1000 * 60 * 60)),
        m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((diff % (1000 * 60)) / 1000)
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [step, task.endTime]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const handleStartFocus = () => {
    setStep('FOCUS');
    setCompletedGoals(new Array(goals.length).fill(false));
    if (isFullScreen && !document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
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

  return (
    <div ref={containerRef} className={cn(
      "min-h-screen transition-all duration-1000 flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden",
      step === 'PREP' ? "bg-background" : (step === 'DONE' ? "bg-emerald-600 text-white" : (intensity === 'INTENSE' ? "bg-slate-950 text-white" : "bg-slate-900 text-white"))
    )}>
      
      {/* Background Ambience */}
      <AnimatePresence>
        {step === 'FOCUS' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
             <div className={cn(
               "absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent",
               intensity === 'INTENSE' && "from-orange-500/20"
             )} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER / CONTROLS */}
      <div className="absolute top-8 left-8 right-8 flex items-center justify-between z-50">
        <Link href="/focus">
          <Button variant="ghost" className={cn("rounded-full gap-2 font-bold", (step === 'FOCUS' || step === 'DONE') && "text-white hover:bg-white/10")}>
            <ArrowLeft className="w-4 h-4" /> Exit
          </Button>
        </Link>

        <div className="flex items-center gap-3">
          {step === 'FOCUS' && (
            <>
               <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full bg-white/5 hover:bg-white/20 text-white"
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </Button>
            </>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn("rounded-full bg-white/5 hover:bg-white/20", (step === 'FOCUS' || step === 'DONE') ? "text-white" : "text-foreground")}
            onClick={toggleFullScreen}
          >
            {isFullScreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* PREP PHASE */}
      {step === 'PREP' && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full space-y-12"
        >
          <div className="text-center space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Session Preparation</span>
            <h1 className="text-6xl font-heading font-black tracking-tighter">{task.subject}</h1>
            <p className="text-muted-foreground font-medium">Set your parameters before entering the zone.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" /> Intensity Level
              </Label>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setIntensity('NORMAL')}
                  className={cn(
                    "p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3",
                    intensity === 'NORMAL' ? "bg-primary/5 border-primary text-primary shadow-lg shadow-primary/10" : "bg-card border-border/40 text-muted-foreground grayscale opacity-50"
                  )}
                >
                  <Flame className="w-8 h-8" />
                  <span className="font-bold">Normal</span>
                </button>
                <button 
                  onClick={() => setIntensity('INTENSE')}
                  className={cn(
                    "p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3",
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

          <div className="pt-8 border-t flex flex-col items-center gap-4">
            <Button 
              onClick={handleStartFocus}
              className="h-20 w-full sm:w-[400px] rounded-[32px] text-2xl font-heading font-black shadow-2xl shadow-primary/30 active:scale-95 transition-all gap-4"
            >
              <Play className="w-8 h-8 fill-current" /> ENTER FOCUS
            </Button>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Ending at {task.endTime}</p>
          </div>
        </motion.div>
      )}

      {/* FOCUS PHASE */}
      {step === 'FOCUS' && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full flex flex-col items-center space-y-16"
        >
          {/* MASSIVE TIMER */}
          <div className="flex flex-col items-center space-y-4">
            <motion.div 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-[12rem] sm:text-[18rem] font-heading font-black tabular-nums tracking-tighter leading-none text-white drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl w-full">
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
                        <CheckCircle2 className={cn("w-4 h-4 text-white", completedGoals[i] ? "opacity-100" : "opacity-0")} />
                      </div>
                      <span className={cn("text-xl font-bold transition-all", completedGoals[i] ? "text-white/50 line-through" : "text-white/90")}>{goal}</span>
                    </motion.div>
                  ))}
               </div>
            </div>

            {/* QUICK RESOURCES */}
            <div className="space-y-8">
               <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/40 flex items-center gap-3">
                 <BookOpen className="w-4 h-4" /> Materials
               </h3>
               <div className="grid grid-cols-1 gap-4">
                  {resources.length === 0 ? (
                    <p className="text-sm text-white/20 italic p-8 border-2 border-dashed border-white/5 rounded-[32px] text-center">No materials attached</p>
                  ) : (
                    resources.slice(0, 4).map((res) => (
                      <a 
                        key={res.id}
                        href={res.url}
                        target="_blank"
                        className="flex items-center justify-between p-6 rounded-[24px] bg-white/5 border border-white/5 hover:bg-white/10 transition-all"
                      >
                         <div className="flex items-center gap-4">
                           <div className="p-3 bg-white/5 rounded-xl text-primary">
                             <FileText className="w-5 h-5" />
                           </div>
                           <span className="font-bold text-white/90">{res.title}</span>
                         </div>
                         <Maximize2 className="w-4 h-4 text-white/20" />
                      </a>
                    ))
                  )}
               </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* SUCCESS PHASE */}
      {step === 'DONE' && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-8 z-10"
        >
          <div className="p-8 bg-white/20 rounded-full inline-block mb-4">
            <Trophy className="w-24 h-24 text-white" />
          </div>
          <h1 className="text-7xl font-heading font-black tracking-tighter text-white">You made it!</h1>
          <p className="text-2xl text-white/80 font-bold max-w-lg mx-auto">
            Session complete. You crushed your objectives and maintained deep focus.
          </p>
          <div className="pt-8">
            <Link href="/">
              <Button size="lg" className="h-16 px-12 rounded-2xl bg-white text-emerald-600 hover:bg-white/90 font-black text-xl shadow-xl transition-all active:scale-95">
                RETURN TO DASHBOARD
              </Button>
            </Link>
          </div>
        </motion.div>
      )}

      {/* Hidden Audio */}
      <audio 
        ref={audioRef}
        loop 
        muted={isMuted}
        src={audioSource === 'RAIN' ? 'https://www.soundjay.com/nature/rain-01.mp3' : ''} 
      />
    </div>
  );
}
