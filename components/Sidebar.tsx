'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import { 
  Home, 
  Calendar, 
  CheckCircle, 
  Settings, 
  LogOut, 
  Sparkles, 
  Library,
  Layers,
  GraduationCap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { logoutUser } from "@/lib/actions";
import { UserProgress } from "@/lib/types";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Dashboard", icon: Home, href: "/" },
  { label: "AI Buddy", icon: Sparkles, href: "/ai" },
  { label: "Project Hub", icon: Layers, href: "/projects" },
  { label: "Calendar", icon: Calendar, href: "/calendar" },
  { label: "Resources", icon: Library, href: "/resources" },
  { label: "History", icon: CheckCircle, href: "/history" },
  { label: "Analytics", icon: GraduationCap, href: "/summaries" },
  { label: "Timetable", icon: Settings, href: "/manage" },
];

export function Sidebar({ userProgress }: { userProgress: UserProgress | null }) {
  const pathname = usePathname();

  // Don't show sidebar on auth pages
  if (['/login', '/register', '/welcome'].includes(pathname)) return null;

  return (
    <aside className="w-80 h-full border-r border-border/40 bg-card flex flex-col shrink-0">
      {/* Brand */}
      <div className="p-8 border-b border-border/40">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-heading font-black tracking-tighter">Study Flow</h1>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground leading-none">V 0.1.7 PRO</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link 
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-6 py-4 rounded-[20px] transition-all duration-300 font-bold group",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "group-hover:text-primary transition-colors")} />
              <span className="tracking-tight">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border/40 bg-muted/20 space-y-4">
        {userProgress && (
          <div className="p-6 bg-card rounded-[28px] border border-border/60 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-sm">
              {userProgress.name?.slice(0, 1).toUpperCase()}
            </div>
            <div className="flex-1 overflow-hidden">
               <p className="text-sm font-black truncate">{userProgress.name}</p>
               <p className="text-[10px] font-bold text-muted-foreground uppercase">Lvl {userProgress.level} Scholar</p>
            </div>
            <ThemeToggle />
          </div>
        )}

        <form action={logoutUser}>
          <button className="w-full flex items-center gap-4 px-6 py-4 rounded-[20px] text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all font-bold group">
            <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Logout System</span>
          </button>
        </form>
      </div>
    </aside>
  );
}
