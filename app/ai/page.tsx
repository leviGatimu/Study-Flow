import { checkAIAvailability, getChatSessions } from '@/lib/ai-actions';
import { syncStreak } from '@/lib/actions';
import { AIChatInterface } from './AIChatInterface';
import { AIKeyPrompt } from './AIKeyPrompt';

export const dynamic = 'force-dynamic';

export default async function AIPage() {
  const [{ available }, userProgress, initialSessions] = await Promise.all([
    checkAIAvailability(),
    syncStreak(),
    getChatSessions()
  ]);

  return (
    <div className="flex h-screen flex-col bg-background relative animate-in fade-in duration-500">
      {available ? (
        <AIChatInterface 
          userName={userProgress?.name || 'Student'} 
          initialSessions={initialSessions as any}
        />
      ) : (
        <AIKeyPrompt />
      )}
    </div>
  );
}
