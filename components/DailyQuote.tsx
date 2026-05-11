'use client';

import { useEffect, useState } from 'react';

const VERSES = [
  { text: "Whatever your hand finds to do, do it with all your might, for in the realm of the dead, where you are going, there is neither working nor planning nor knowledge nor wisdom.", ref: "Ecclesiastes 9:10" },
  { text: "Commit to the Lord whatever you do, and he will establish your plans.", ref: "Proverbs 16:3" },
  { text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.", ref: "Colossians 3:23" },
  { text: "Let the wise hear and increase in learning, and the one who understands obtain guidance.", ref: "Proverbs 1:5" },
  { text: "For the Lord gives wisdom; from his mouth come knowledge and understanding.", ref: "Proverbs 2:6" },
  { text: "Do you see a man skillful in his work? He will stand before kings; he will not stand before obscure men.", ref: "Proverbs 22:29" },
  { text: "The plans of the diligent lead surely to abundance, but everyone who is hasty comes only to poverty.", ref: "Proverbs 21:5" }
];

export function DailyQuote() {
  const [verse, setVerse] = useState(VERSES[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(m => m === false ? true : m);
      // Pick based on day of year
      const start = new Date(new Date().getFullYear(), 0, 0).getTime();
      const diff = new Date().getTime() - start;
      const oneDay = 1000 * 60 * 60 * 24;
      const dayOfYear = Math.floor(diff / oneDay);
      
      setVerse(VERSES[dayOfYear % VERSES.length]);
    }, 0);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-card border border-border/60 border-l-4 border-l-primary p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden mt-6 animate-in fade-in duration-500 hover:-translate-y-0.5 hover:shadow-md transition-all">
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <blockquote className="italic text-muted-foreground text-lg leading-relaxed relative z-10">
        &quot;{verse.text}&quot;
        <footer className="mt-4 text-sm font-bold text-foreground/80 flex items-center gap-2">
          <span className="w-4 h-[2px] bg-primary rounded-full"></span> {verse.ref}
        </footer>
      </blockquote>
    </div>
  );
}
