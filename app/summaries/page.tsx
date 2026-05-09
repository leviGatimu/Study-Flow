import { getWeeklySummaries, generateWeeklySummary } from '@/lib/actions';
import { format, startOfWeek, subDays } from 'date-fns';
import { SummaryCard } from '@/components/SummaryCard';
import { ScrollText, BarChart3, AlertCircle } from 'lucide-react';

export default async function WeeklySummariesPage() {
  // Automatically try to generate summary for previous week if it doesn't exist
  const lastMonday = startOfWeek(subDays(new Date(), 7), { weekStartsOn: 1 });
  await generateWeeklySummary(lastMonday);

  const summaries = await getWeeklySummaries();

  return (
    <div className="space-y-12 max-w-[1400px] mx-auto animate-in fade-in duration-500 pb-16">
      <div className="pt-6 pb-2 border-b border-border/40">
        <h1 className="text-5xl font-heading font-black tracking-tight text-foreground">Weekly Summaries</h1>
        <p className="text-xl text-muted-foreground font-semibold mt-3">Your academic performance reports and downloadable PDFs.</p>
      </div>

      {summaries.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 bg-muted/5 border-2 border-dashed border-border/40 rounded-[40px] text-center">
          <ScrollText className="w-16 h-16 text-muted-foreground/20 mb-6" />
          <h2 className="text-2xl font-heading font-bold text-muted-foreground">No reports generated yet.</h2>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">Reports are automatically created at the end of each week based on your activity and completion rates.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {summaries.map((summary) => (
            <SummaryCard key={summary.id} summary={summary as any} />
          ))}
        </div>
      )}

      {/* Info Box */}
      <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-3xl flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-blue-900 dark:text-blue-300">How Grading Works</p>
          <p className="text-sm text-blue-800/70 dark:text-blue-400/70 leading-relaxed">
            Grades are calculated based on your task completion ratio for that specific week. 
            <span className="font-bold mx-1">A+ (95%+)</span> requires near perfection, while <span className="font-bold mx-1">A (90%+)</span> shows strong consistency. 
            Keep your streak alive to maintain a high grade!
          </p>
        </div>
      </div>
    </div>
  );
}
