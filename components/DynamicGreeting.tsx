'use client';

import { useEffect, useState } from 'react';

export function DynamicGreeting() {
  const [greeting, setGreeting] = useState('Good morning.');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateGreeting = () => {
      // Get current hour in Kigali
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Kigali',
        hour: 'numeric',
        hourCycle: 'h24',
      });
      const hourStr = formatter.format(new Date());
      const hour = parseInt(hourStr, 10);

      if (hour >= 5 && hour < 12) {
        setGreeting('Good morning.');
      } else if (hour >= 12 && hour < 18) {
        setGreeting('Good afternoon.');
      } else {
        setGreeting('Good evening.');
      }
    };

    updateGreeting();
    // Check every minute just in case the hour changes while they have it open
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    // Show a fallback or hidden text to avoid layout shift before hydration
    return (
      <h1 className="text-5xl font-heading font-black tracking-tight text-foreground opacity-0">
        Good morning.
      </h1>
    );
  }

  return (
    <h1 className="text-5xl font-heading font-black tracking-tight text-foreground animate-in fade-in duration-500">
      {greeting}
    </h1>
  );
}
