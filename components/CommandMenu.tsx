"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Home,
  Calendar,
  CheckCircle,
  Settings,
  FolderOpen,
  FileText,
  LayoutGrid,
  BrainCircuit,
  Zap
} from "lucide-react";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
            <Home className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/timetable"))}>
            <LayoutGrid className="mr-2 h-4 w-4" />
            <span>Timetable</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/focus"))}>
            <Zap className="mr-2 h-4 w-4" />
            <span>Focus Mode</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/calendar"))}>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/history"))}>
            <CheckCircle className="mr-2 h-4 w-4" />
            <span>History</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/summaries"))}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Summaries</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/resources"))}>
            <FolderOpen className="mr-2 h-4 w-4" />
            <span>Resources</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/ai"))}>
            <BrainCircuit className="mr-2 h-4 w-4" />
            <span>AI Buddy</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem onSelect={() => runCommand(() => router.push("/manage"))}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Manage Schedule</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/settings"))}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings & API Key</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
