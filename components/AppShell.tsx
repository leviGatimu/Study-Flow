"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { ReminderManager } from "@/components/ReminderManager";
import { CommandMenu } from "@/components/CommandMenu";

const PUBLIC_ROUTES = ["/welcome", "/login", "/register"];

export function AppShell({ 
  children,
  userProgress
}: { 
  children: React.ReactNode,
  userProgress?: any
}) {
  const pathname = usePathname();
  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (isPublicRoute) {
    return <main className="flex-1 overflow-y-auto z-10 relative">{children}</main>;
  }

  return (
    <>
      <ReminderManager />
      <CommandMenu />
      <Sidebar userProgress={userProgress} />
      <main className="flex-1 overflow-y-auto z-10 relative">{children}</main>
    </>
  );
}
