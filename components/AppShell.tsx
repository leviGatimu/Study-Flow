'use client';

import { Sidebar } from "@/components/Sidebar";
import { UserProgress } from "@/lib/types";

export function AppShell({ 
  children, 
  userProgress 
}: { 
  children: React.ReactNode;
  userProgress: UserProgress | null;
}) {
  return (
    <div className="flex h-full w-full overflow-hidden">
      <Sidebar userProgress={userProgress} />
      <main className="flex-1 overflow-y-auto custom-scrollbar bg-background">
        {children}
      </main>
    </div>
  );
}
