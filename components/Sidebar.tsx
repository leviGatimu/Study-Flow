"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  Calendar,
  CheckCircle,
  Settings,
  FolderOpen,
  FileText,
  LayoutGrid,
  LogOut,
  BrainCircuit,
  Zap,
  GraduationCap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { logoutUser } from "@/lib/actions";
import { RankBadge } from "./RankBadge";

const navItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "School", href: "/school", icon: GraduationCap },
  { name: "Focus Mode", href: "/focus", icon: Zap },
  { name: "Timetable", href: "/timetable", icon: LayoutGrid },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "History", href: "/history", icon: CheckCircle },
  { name: "Summaries", href: "/summaries", icon: FileText },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Resources", href: "/resources", icon: FolderOpen },
  { name: "AI Buddy", href: "/ai", icon: BrainCircuit },
  { name: "Manage Schedule", href: "/manage", icon: Settings },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar({ userProgress }: { userProgress: any }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    for (const item of navItems) {
      router.prefetch(item.href);
    }
  }, [router]);

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card p-4 shrink-0">
      <div className="flex h-14 items-center justify-between px-4 mb-8 mt-2">
        <Link
          href="/"
          className="flex items-center gap-3 font-heading font-black text-xl text-primary hover:opacity-80 transition-opacity"
        >
          <div className="p-2 bg-primary/10 rounded-xl text-primary">
            <Calendar className="h-6 w-6" />
          </div>
          <span>Study Flow</span>
        </Link>
        <ThemeToggle />
      </div>

      <nav className="flex-1 space-y-1.5 overflow-y-auto pr-2 custom-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 active:scale-95",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5",
                  isActive ? "text-primary-foreground" : "opacity-70",
                )}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-border/40 space-y-6">
        {userProgress && (
          <div className="px-4">
            <RankBadge level={userProgress.level} xp={userProgress.xp} showProgress={true} />
          </div>
        )}
        
        <form action={logoutUser}>
          <Button 
            variant="ghost" 
            type="submit"
            className="w-full justify-start gap-4 rounded-xl px-4 py-6 text-sm font-bold text-muted-foreground hover:bg-destructive/5 hover:text-destructive transition-all active:scale-95"
          >
            <LogOut className="h-5 w-5 opacity-70" />
            Logout
          </Button>
        </form>
      </div>
    </div>
  );
}
