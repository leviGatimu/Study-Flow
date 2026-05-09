'use client';

import { Bar, BarChart, ResponsiveContainer, YAxis, Tooltip, Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import { format, subDays, isSameDay } from 'date-fns';

type ChartData = {
  date: string;
  homework: number;
  revision: number;
  total: number;
};

export function HistoryCharts({ tasks }: { tasks: any[] }) {
  // Generate data for the last 14 days
  const data: ChartData[] = [];
  for (let i = 13; i >= 0; i--) {
    const d = subDays(new Date(), i);
    const dayTasks = tasks.filter(t => isSameDay(new Date(t.date), d));
    
    data.push({
      date: format(d, 'MMM d'),
      homework: dayTasks.filter(t => t.type === 'HOMEWORK').length,
      revision: dayTasks.filter(t => t.type === 'REVISION').length,
      total: dayTasks.length
    });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Area Chart: Activity Trend */}
      <div className="bg-card border border-border/60 p-6 rounded-3xl shadow-sm relative overflow-hidden">
        <h3 className="font-heading font-bold text-lg mb-6">Activity Trend (14 Days)</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.4} />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold'}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold'}} />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Area type="monotone" dataKey="total" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart: Distribution */}
      <div className="bg-card border border-border/60 p-6 rounded-3xl shadow-sm relative overflow-hidden">
        <h3 className="font-heading font-bold text-lg mb-6">Homework vs Revision</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.4} />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold'}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold'}} />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="homework" stackId="a" fill="var(--primary)" radius={[0, 0, 0, 0]} />
              <Bar dataKey="revision" stackId="a" fill="oklch(0.65 0.15 45)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
