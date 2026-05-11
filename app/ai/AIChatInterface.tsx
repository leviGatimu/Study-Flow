"use client";

import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  BrainCircuit,
  Calendar,
  ChevronLeft,
  ChevronRight,
  KeyRound,
  Loader2,
  MessageSquare,
  Plus,
  Send,
  Settings,
  Sparkles,
  Trash2,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { askAIBuddy, createChatSession, deleteChatSession, getChatMessages, saveAIKey } from "@/lib/ai-actions";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const PRESET_PROMPTS = [
  { icon: Calendar, label: "Schedule a study session", text: "Schedule a 2-hour Math revision for tonight at 8 PM." },
  { icon: BookOpen, label: "Summarize my day", text: "Give me a rundown of everything I have scheduled for today." },
  { icon: Sparkles, label: "Study tips", text: "Give me 3 quick tips to stay focused during long study sessions." },
  { icon: Trophy, label: "Check my progress", text: "How is my streak and syllabus completion looking?" },
];

type Session = {
  id: string;
  title: string;
};

type ChatMessage = {
  role: "user" | "model";
  text: string;
  isTyping?: boolean;
};

export function AIChatInterface({
  userName,
  initialSessions = [],
}: {
  userName: string;
  initialSessions: Session[];
}) {
  const [sessions, setSessions] = useState<Session[]>(initialSessions);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [aiStatus, setAiStatus] = useState("Ready");
  const [settingsError, setSettingsError] = useState<string | null>(null);
  const typingTimerRef = useRef<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        window.clearInterval(typingTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!activeSessionId) return;

    const loadMessages = async () => {
      const loaded = await getChatMessages(activeSessionId);
      setMessages(
        loaded.map((message) => ({
          role: message.role === "user" ? "user" : "model",
          text: message.content,
        }))
      );
    };

    loadMessages();
  }, [activeSessionId]);

  const handleUpdateKey = async (formData: FormData) => {
    const key = formData.get("key") as string;
    if (!key) return;

    const result = await saveAIKey(key);
    if (!result.success) {
      setSettingsError(result.error ?? "Unable to validate this API key.");
      return;
    }

    setAiStatus(`${result.provider} • ${result.model}`);
    setSettingsError(null);
    setIsSettingsOpen(false);
  };

  const handleNewChat = async () => {
    const session = await createChatSession();
    setSessions((current) => [session, ...current]);
    setActiveSessionId(session.id);
    setMessages([]);
  };

  const handleDeleteSession = async (event: React.MouseEvent, id: string) => {
    event.stopPropagation();
    await deleteChatSession(id);
    setSessions((current) => current.filter((session) => session.id !== id));

    if (activeSessionId === id) {
      setActiveSessionId(null);
      setMessages([]);
    }
  };

  const startTypingAnimation = (fullText: string) => {
    if (typingTimerRef.current) {
      window.clearInterval(typingTimerRef.current);
    }

    const messageIndex = messages.length + 1;
    setMessages((current) => [...current, { role: "model", text: "", isTyping: true }]);

    let currentIndex = 0;
    const step = fullText.length > 400 ? 6 : fullText.length > 180 ? 4 : 2;

    typingTimerRef.current = window.setInterval(() => {
      currentIndex = Math.min(currentIndex + step, fullText.length);

      setMessages((current) =>
        current.map((message, index) =>
          index === messageIndex
            ? {
                role: "model",
                text: fullText.slice(0, currentIndex),
                isTyping: currentIndex < fullText.length,
              }
            : message
        )
      );

      if (currentIndex >= fullText.length && typingTimerRef.current) {
        window.clearInterval(typingTimerRef.current);
        typingTimerRef.current = null;
      }
    }, 16);
  };

  const handleSend = async (overrideText?: string) => {
    const textToSend = overrideText || input.trim();
    if (!textToSend || isLoading) return;

    setInput("");

    let currentSessionId = activeSessionId;
    if (!currentSessionId) {
      const session = await createChatSession(`${textToSend.slice(0, 30)}...`);
      setSessions((current) => [session, ...current]);
      currentSessionId = session.id;
      setActiveSessionId(session.id);
    }

    const currentMessages = [...messages, { role: "user" as const, text: textToSend }];
    setMessages(currentMessages);
    setIsLoading(true);

    const historyForAPI = messages.map((message) => ({
      role: message.role,
      parts: [{ text: message.text }],
    }));

    const result = await askAIBuddy(textToSend, historyForAPI, currentSessionId);
    setIsLoading(false);

    if (result.error) {
      setMessages((current) => [...current, { role: "model", text: `Error: ${result.error}` }]);
      return;
    }

    if (result.provider && result.model) {
      setAiStatus(`${result.provider} • ${result.model}`);
    }

    if (result.text) {
      startTypingAnimation(result.text);
    }
  };

  return (
    <div className="flex h-full bg-background">
      <aside
        className={cn(
          "relative shrink-0 border-r bg-card transition-all duration-200",
          isSidebarOpen ? "w-64" : "w-0 overflow-hidden border-r-0"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="border-b p-3">
            <Button onClick={handleNewChat} variant="outline" className="h-10 w-full justify-start gap-2 rounded-xl">
              <Plus className="h-4 w-4" />
              New chat
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            <div className="space-y-1">
              {sessions.map((session) => (
                <button
                  key={session.id}
                  onClick={() => setActiveSessionId(session.id)}
                  className={cn(
                    "group flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                    activeSessionId === session.id
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                  )}
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <MessageSquare className="h-4 w-4 shrink-0" />
                    <span className="truncate">{session.title}</span>
                  </div>
                  <Trash2
                    className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 hover:text-destructive"
                    onClick={(event) => handleDeleteSession(event, session.id)}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsSidebarOpen((value) => !value)}
          className="absolute -right-4 top-6 flex h-8 w-8 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm hover:text-foreground"
        >
          {isSidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>
      </aside>

      {!isSidebarOpen ? (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="absolute left-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm hover:text-foreground"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      ) : null}

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b px-4 md:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <BrainCircuit className="h-5 w-5 text-muted-foreground" />
            <div className="min-w-0">
              <h1 className="truncate text-sm font-semibold">AI Buddy</h1>
              <p className="truncate text-xs text-muted-foreground">{aiStatus}</p>
            </div>
          </div>

          <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-lg">
                <Settings className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-2xl">
              <DialogHeader>
                <DialogTitle>AI Configuration</DialogTitle>
              </DialogHeader>
              <form action={handleUpdateKey} className="space-y-4">
                <div className="space-y-2">
                  <Label>API Key</Label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input name="key" type="password" placeholder="Paste new key here" className="pl-9" required />
                  </div>
                  {settingsError ? <p className="text-sm text-destructive">{settingsError}</p> : null}
                </div>
                <Button type="submit" className="w-full">Save</Button>
              </form>
            </DialogContent>
          </Dialog>
        </header>

        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center px-4 text-center">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">How can I help, {userName}?</h2>
              <div className="mt-8 grid w-full gap-3 md:grid-cols-2">
                {PRESET_PROMPTS.map((prompt) => {
                  const Icon = prompt.icon;
                  return (
                    <button
                      key={prompt.label}
                      onClick={() => handleSend(prompt.text)}
                      className="rounded-2xl border bg-card p-4 text-left transition-colors hover:bg-muted/50"
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="mt-0.5 h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{prompt.label}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{prompt.text}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="mx-auto w-full max-w-3xl px-4 py-8">
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <div key={`${message.role}-${index}`} className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      {message.role === "user" ? (
                        <>
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background">
                            <span className="text-xs font-semibold">{userName.slice(0, 1).toUpperCase()}</span>
                          </div>
                          <span>You</span>
                        </>
                      ) : (
                        <>
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted">
                            <BrainCircuit className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <span>AI Buddy</span>
                        </>
                      )}
                    </div>

                    <div
                      className={cn(
                        "whitespace-pre-wrap pl-9 text-[15px] leading-7 text-foreground",
                        message.role === "model" && "pr-2"
                      )}
                    >
                      {message.text}
                      {message.isTyping ? <span className="ml-1 inline-block h-5 w-2 animate-pulse rounded-sm bg-foreground/70 align-middle" /> : null}
                    </div>
                  </div>
                ))}

                {isLoading ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted">
                        <BrainCircuit className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <span>AI Buddy</span>
                    </div>
                    <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Thinking...
                    </div>
                  </div>
                ) : null}
              </div>
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <div className="border-t bg-background p-4 md:p-6">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
            {messages.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {PRESET_PROMPTS.slice(0, 3).map((prompt) => (
                  <button
                    key={prompt.label}
                    onClick={() => handleSend(prompt.text)}
                    className="rounded-full border px-3 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {prompt.label}
                  </button>
                ))}
              </div>
            ) : null}

            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 rounded-2xl border bg-card p-2"
            >
              <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Message AI Buddy"
                className="border-0 bg-transparent shadow-none focus-visible:ring-0"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" className="rounded-xl" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
