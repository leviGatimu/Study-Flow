import { updateUserName, clearAllTasks, syncStreak, logoutUser } from '@/lib/actions';
import { saveAIKey } from '@/lib/ai-actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { User, ShieldAlert, Bell, Download, Trash2, CheckCircle2, LogOut, BrainCircuit } from 'lucide-react';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function SettingsPage() {
  const userProgress = await syncStreak();

  const handleUpdateName = async (formData: FormData) => {
    'use server';
    const name = formData.get('name') as string;
    if (name) {
      await updateUserName(name);
    }
  };

  const handleUpdateAIKey = async (formData: FormData) => {
    'use server';
    const key = formData.get('key') as string;
    if (key) {
      await saveAIKey(key);
    }
  };

  const handleReset = async () => {
    'use server';
    await clearAllTasks();
    redirect('/');
  };

  return (
    <div className="space-y-12 max-w-[1000px] mx-auto animate-in fade-in duration-500 pb-16">
      <div className="pt-6 pb-2 border-b border-border/40 flex items-end justify-between">
        <div>
          <h1 className="text-5xl font-heading font-black tracking-tight text-foreground">Settings</h1>
          <p className="text-xl text-muted-foreground font-semibold mt-3">Configure your workstation and manage your data.</p>
        </div>
        <form action={logoutUser}>
          <Button variant="outline" type="submit" className="rounded-2xl font-bold h-12 px-6 shadow-sm border-border/60 active:scale-95 transition-all gap-2">
            <LogOut className="w-4 h-4" /> Logout
          </Button>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-8">
        
        {/* Profile Section */}
        <Card className="rounded-[32px] border-border/60 shadow-sm overflow-hidden">
          <CardHeader className="bg-muted/20 border-b p-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <User className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-2xl font-heading font-black">Personal Profile</CardTitle>
                <CardDescription className="font-medium">How the app greets you on the dashboard.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <form action={handleUpdateName} className="flex flex-col sm:flex-row gap-4 items-end max-w-md">
              <div className="space-y-2 flex-1 w-full">
                <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Display Name</Label>
                <Input 
                  name="name" 
                  defaultValue={userProgress?.name || ''} 
                  placeholder="Enter your name" 
                  className="h-12 rounded-xl bg-muted/30 border-border/60 font-bold px-4"
                />
              </div>
              <Button type="submit" className="h-12 rounded-xl font-bold px-8 shadow-lg shadow-primary/20">
                Save Name
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* AI Integration Section */}
        <Card className="rounded-[32px] border-border/60 shadow-sm overflow-hidden">
          <CardHeader className="bg-muted/20 border-b p-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-2xl font-heading font-black">AI Study Buddy</CardTitle>
                <CardDescription className="font-medium">Use one validated key for Gemini, OpenAI, Anthropic, or Groq.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <form action={handleUpdateAIKey} className="flex flex-col sm:flex-row gap-4 items-end max-w-xl">
              <div className="space-y-2 flex-1 w-full">
                <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">AI Provider API Key</Label>
                <Input 
                  name="key" 
                  type="password"
                  defaultValue={userProgress?.geminiApiKey || ''} 
                  placeholder="Paste your key here" 
                  className="h-12 rounded-xl bg-muted/30 border-border/60 font-bold px-4"
                />
              </div>
              <Button type="submit" className="h-12 rounded-xl font-bold px-8 shadow-lg shadow-primary/20">
                Save Key
              </Button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">
              The app validates the key against the supported providers before using it in chat.
            </p>
          </CardContent>
        </Card>

        {/* Preferences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Notifications */}
           <Card className="rounded-[32px] border-border/60 shadow-sm overflow-hidden">
            <CardHeader className="bg-muted/20 border-b p-6">
              <CardTitle className="text-xl font-heading font-black flex items-center gap-3">
                <Bell className="w-5 h-5 text-primary" /> Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                Reminders are managed at the system level. You can toggle them using the prompt on the dashboard or by resetting your browser permissions.
              </p>
              <div className="flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest bg-primary/5 p-3 rounded-xl border border-primary/10">
                <CheckCircle2 className="w-3.5 h-3.5" /> 5-Minute Nudges Active
              </div>
            </CardContent>
          </Card>

          {/* Data Export */}
          <Card className="rounded-[32px] border-border/60 shadow-sm overflow-hidden">
            <CardHeader className="bg-muted/20 border-b p-6">
              <CardTitle className="text-xl font-heading font-black flex items-center gap-3">
                <Download className="w-5 h-5 text-primary" /> Data Backup
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                This is a local-only app. Your data is stored in a private SQLite database on your machine.
              </p>
              <Button variant="outline" className="w-full h-12 rounded-xl font-bold gap-2 border-border/60" disabled>
                Export JSON (Coming Soon)
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Danger Zone */}
        <Card className="rounded-[32px] border-destructive/30 shadow-sm overflow-hidden bg-destructive/[0.02]">
          <CardHeader className="bg-destructive/10 border-b border-destructive/20 p-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-destructive/10 rounded-2xl text-destructive">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-2xl font-heading font-black text-destructive">Danger Zone</CardTitle>
                <CardDescription className="text-destructive/70 font-medium">Irreversible actions that affect your data.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white dark:bg-black rounded-2xl border border-destructive/20 shadow-sm">
              <div className="space-y-1">
                <p className="font-bold text-foreground">Reset All Daily Tasks</p>
                <p className="text-xs text-muted-foreground font-medium">This will clear your entire history and today&apos;s progress.</p>
              </div>
              <form action={handleReset}>
                <Button variant="destructive" type="submit" className="rounded-xl font-black h-11 px-6 shadow-lg shadow-destructive/20 active:scale-95 transition-all gap-2">
                  <Trash2 className="w-4 h-4" /> Reset Application
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
