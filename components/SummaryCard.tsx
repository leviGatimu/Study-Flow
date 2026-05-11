'use client';

import { 
  Trophy, BookOpen, Clock, 
  ChevronRight, BrainCircuit,
  PieChart as PieChartIcon
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip
} from 'recharts';
import { WeeklySummary } from '@/lib/types';
import { format } from 'date-fns';

export function SummaryCard({ summary }: { summary: WeeklySummary }) {
  const breakdown = JSON.parse(summary.subjectBreakdown);
  const pieData = Object.entries(breakdown).map(([name, value]) => ({ 
    name, 
    value: Number(value) 
  }));

  const COLORS = ['#3b82f6', '#f97316', '#8b5cf6', '#10b981', '#ef4444', '#f59e0b'];

  const hours = Math.floor(summary.totalMinutes / 60);
  const mins = summary.totalMinutes % 60;

  return (
    <div className="group bg-card border border-border/60 rounded-[40px] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">
      {/* Grade Badge */}
      <div className="absolute top-8 right-8 w-20 h-20 bg-primary/10 rounded-3xl border border-primary/20 flex flex-col items-center justify-center shadow-lg shadow-primary/5 group-hover:scale-110 transition-transform">
        <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">GRADE</span>
        <span className="text-4xl font-heading font-black text-primary">{summary.grade}</span>
      </div>

      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[10px]">
            <BrainCircuit className="w-3 h-3" />
            Performance Report
          </div>
          <h3 className="text-3xl font-heading font-black tracking-tight leading-none">
            {format(new Date(summary.startDate), 'MMM do')} — {format(new Date(summary.endDate), 'MMM do')}
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
           <div className="p-6 bg-muted/30 rounded-[32px] border border-border/40">
             <div className="flex items-center gap-3 text-muted-foreground mb-3">
               <Clock className="w-4 h-4" />
               <span className="text-[10px] font-black uppercase tracking-widest">Total Focus</span>
             </div>
             <p className="text-2xl font-heading font-black">{hours}h {mins}m</p>
           </div>
           <div className="p-6 bg-muted/30 rounded-[32px] border border-border/40">
             <div className="flex items-center gap-3 text-muted-foreground mb-3">
               <BookOpen className="w-4 h-4" />
               <span className="text-[10px] font-black uppercase tracking-widest">Efficiency</span>
             </div>
             <p className="text-2xl font-heading font-black">{summary.grade === 'A+' ? 'Elite' : summary.grade === 'F' ? 'Low' : 'Stable'}</p>
           </div>
        </div>

        {/* Breakdown Chart */}
        <div className="space-y-4">
           <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <PieChartIcon className="w-3.5 h-3.5" /> Subject Breakdown
              </span>
           </div>
           
           <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={8}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '15px', border: 'none', fontWeight: 'bold' }}
                  />
                </PieChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Action */}
        <button className="w-full h-14 rounded-[24px] bg-muted hover:bg-primary hover:text-white transition-all duration-300 font-bold flex items-center justify-center gap-2 group/btn">
           FULL INSIGHTS <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

      {summary.grade === 'A+' && (
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl animate-pulse" />
      )}
      {summary.grade === 'A+' && (
        <Trophy className="absolute bottom-6 left-6 w-8 h-8 text-yellow-500 opacity-20" />
      )}
    </div>
  );
}
