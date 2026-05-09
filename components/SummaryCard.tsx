'use client';

import { useState, useRef } from 'react';
import { format } from 'date-fns';
import { Download, FileText, ChevronRight, Clock, Trophy, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

type SummaryType = {
  id: string;
  startDate: Date;
  endDate: Date;
  grade: string;
  totalMinutes: number;
  subjectBreakdown: string;
};

export function SummaryCard({ summary }: { summary: SummaryType }) {
  const [isExporting, setIsPending] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);
  
  const breakdown = JSON.parse(summary.subjectBreakdown);
  const totalHours = (summary.totalMinutes / 60).toFixed(1);

  const handleDownload = async () => {
    if (!reportRef.current) return;
    setIsPending(true);
    
    try {
      const canvas = await html2canvas(reportRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Study_Report_${format(new Date(summary.startDate), 'MMM_d')}.pdf`);
    } catch (error) {
      console.error('PDF Generation failed', error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group bg-card border border-border/60 p-8 rounded-[40px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col h-full">
          {/* Grade Glow */}
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
          
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="p-4 bg-muted/50 rounded-3xl text-muted-foreground group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <FileText className="w-6 h-6" />
            </div>
            <div className="text-4xl font-heading font-black text-primary">
              {summary.grade}
            </div>
          </div>

          <h3 className="text-xl font-heading font-black mb-2 relative z-10">
            {format(new Date(summary.startDate), 'MMM d')} — {format(new Date(summary.endDate), 'MMM d, yyyy')}
          </h3>
          
          <div className="mt-auto flex items-center gap-4 relative z-10 pt-4">
            <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground bg-muted/50 px-4 py-2 rounded-2xl">
              <Clock className="w-3.5 h-3.5" />
              {totalHours} hrs
            </div>
            <div className="text-sm font-bold text-primary group-hover:translate-x-1 transition-transform flex items-center gap-1 ml-auto">
              View Details <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-[40px] p-0 border-none shadow-2xl">
        <div className="flex flex-col h-full">
          {/* The Actual Report for Export */}
          <div ref={reportRef} className="bg-white p-12 text-black">
            <div className="flex justify-between items-start border-b-4 border-primary pb-8 mb-10">
              <div>
                <h2 className="text-4xl font-heading font-black tracking-tight text-slate-900 mb-2">WEEKLY PERFORMANCE</h2>
                <p className="text-xl font-bold text-primary uppercase tracking-[0.2em]">
                  {format(new Date(summary.startDate), 'MMMM do')} — {format(new Date(summary.endDate), 'MMMM do, yyyy')}
                </p>
              </div>
              <div className="w-24 h-24 rounded-[32px] bg-primary flex items-center justify-center text-white text-5xl font-heading font-black shadow-xl shadow-primary/20">
                {summary.grade}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
                <Trophy className="w-8 h-8 text-yellow-500 mb-2" />
                <span className="text-3xl font-heading font-black">{summary.grade}</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Weekly Grade</span>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
                <Clock className="w-8 h-8 text-blue-500 mb-2" />
                <span className="text-3xl font-heading font-black">{totalHours}</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Total Hours</span>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
                <BookOpen className="w-8 h-8 text-green-500 mb-2" />
                <span className="text-3xl font-heading font-black">{Object.keys(breakdown).length}</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Subjects Covered</span>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-heading font-black border-l-4 border-primary pl-4">Subject Breakdown</h4>
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(breakdown).map(([subject, mins]: [string, any]) => (
                  <div key={subject} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="font-bold text-lg text-slate-800">{subject}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-black text-slate-400">{(mins / 60).toFixed(1)} hrs</span>
                      <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${Math.min((mins / (summary.totalMinutes || 1)) * 100, 100)}%` }} 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-100 text-center text-slate-400">
              <p className="text-xs font-bold tracking-[0.3em] uppercase">Generated by Study Flow Academic Workstation</p>
            </div>
          </div>

          {/* Fixed Footer with Download Button */}
          <div className="p-8 bg-muted/30 border-t flex justify-center sticky bottom-0 backdrop-blur-md">
            <Button 
              onClick={handleDownload} 
              disabled={isExporting}
              className="h-14 px-10 rounded-2xl font-heading font-black text-lg gap-3 shadow-xl shadow-primary/20"
            >
              {isExporting ? 'Generating PDF...' : <><Download className="w-6 h-6" /> Download PDF Report</>}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
