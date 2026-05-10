"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Calendar,
  CheckCircle,
  Settings,
  Plus,
  FolderOpen,
  FileText,
  LayoutGrid
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Timetable", href: "/timetable", icon: LayoutGrid },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "History", href: "/history", icon: CheckCircle },
  { name: "Summaries", href: "/summaries", icon: FileText },
  { name: "Resources", href: "/resources", icon: FolderOpen },
  { name: "Manage Schedule", href: "/manage", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card p-4">
      <div className="flex h-14 items-center px-4 mb-8 mt-2">
        <Link
          href="/"
          className="flex items-center gap-3 font-heading font-bold text-xl text-primary hover:opacity-80 transition-opacity"
        >
          <div className="p-2 bg-primary/10 rounded-xl text-primary">
            <Calendar className="h-6 w-6" />
          </div>
          <span>Study Flow</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-2">
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
    </div>
  );
}
