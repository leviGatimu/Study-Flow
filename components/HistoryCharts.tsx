'use client';

import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Cell, PieChart, Pie
} from 'recharts';
import { TaskWithTemplate } from '@/lib/types';

export function HistoryCharts({ tasks }: { tasks: TaskWithTemplate[] }) {
  // 1. Data for Subject Breakdown (Minutes)
  const breakdown: Record<string, number> = {};
  tasks.filter(t => t.isDone).forEach(t => {
    const [sH, sM] = t.startTime.split(':').map(Number);
    const [eH, eM] = t.endTime.split(':').map(Number);
    const mins = (eH * 60 + eM) - (sH * 60 + sM);
    const subject = t.subject.replace(/\s*\(revision\)\s*/gi, '');
    breakdown[subject] = (breakdown[subject] || 0) + mins;
  });

  const pieData = Object.entries(breakdown).map(([name, value]) => ({ name, value }));
  const COLORS = ['#3b82f6', '#f97316', '#8b5cf6', '#10b981', '#ef4444', '#f59e0b'];

  // 2. Data for Success Rate (Done vs Missed)
  const doneCount = tasks.filter(t => t.isDone).length;
  const missedCount = tasks.filter(t => t.isMissed).length;
  const barData = [
    { name: 'Completed', count: doneCount, fill: '#10b981' },
    { name: 'Missed', count: missedCount, fill: '#ef4444' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Subject Distribution */}
      <div className="bg-card border border-border/60 p-8 rounded-[40px] shadow-sm">
        <h3 className="text-xl font-heading font-black mb-8 tracking-tight">Time Distribution</h3>
        <div className="h-[350px] w-full">
           <ResponsiveContainer width="100%" height="100%">
             <PieChart>
               <Pie
                 data={pieData}
                 cx="50%"
                 cy="50%"
                 innerRadius={80}
                 outerRadius={120}
                 paddingAngle={5}
                 dataKey="value"
                 stroke="none"
               >
                 {pieData.map((_entry, index) => (
                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                 ))}
               </Pie>
               <Tooltip 
                contentStyle={{ 
                  borderRadius: '20px', 
                  border: 'none', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  fontWeight: 'bold',
                  fontSize: '12px'
                }} 
               />
             </PieChart>
           </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
           {pieData.map((item, i) => (
             <div key={item.name} className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
               <span className="text-xs font-bold text-muted-foreground truncate">{item.name}</span>
             </div>
           ))}
        </div>
      </div>

      {/* Completion Velocity */}
      <div className="bg-card border border-border/60 p-8 rounded-[40px] shadow-sm">
        <h3 className="text-xl font-heading font-black mb-8 tracking-tight">Consistency Ratio</h3>
        <div className="h-[350px] w-full">
           <ResponsiveContainer width="100%" height="100%">
             <BarChart data={barData}>
               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
               <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fontWeight: 'bold' }} 
               />
               <YAxis hide />
               <Tooltip 
                 cursor={{ fill: 'transparent' }}
                 contentStyle={{ 
                  borderRadius: '20px', 
                  border: 'none', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  fontWeight: 'bold'
                }} 
               />
               <Bar dataKey="count" radius={[15, 15, 0, 0]} barSize={60}>
                 {barData.map((entry, index) => (
                   <Cell key={`cell-${index}`} fill={entry.fill} />
                 ))}
               </Bar>
             </BarChart>
           </ResponsiveContainer>
        </div>
        <div className="mt-8 p-6 bg-muted/30 rounded-3xl border border-border/40">
           <p className="text-sm font-bold text-muted-foreground leading-relaxed">
             You have completed <span className="text-success">{doneCount} sessions</span> total. 
             Keep pushing to minimize the red bars!
           </p>
        </div>
      </div>
    </div>
  );
}
