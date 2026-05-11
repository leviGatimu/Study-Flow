'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';
import { prisma } from '@/lib/prisma';
import { getUserId } from '@/lib/auth';
import { createQuickTask, getAllTasks, getEvents, syncStreak } from '@/lib/actions';
import { revalidatePath } from 'next/cache';

type Provider = 'gemini' | 'openai' | 'anthropic' | 'groq';

type HistoryMessage = { role: string; parts: { text: string }[] };
type PersistedMessage = { role: 'user' | 'model'; text: string };
type ToolArgs = {
  subject: string;
  startTime: string;
  endTime: string;
  type: string;
  date?: string;
};

type DetectedProvider = {
  provider: Provider;
  label: string;
  model: string;
  models: string[];
};

const SYSTEM_INSTRUCTION = `You are an elite, highly personalized AI Study Buddy and Project Architect.
You can help the user plan study time, understand workload, and improve consistency.
If the user asks you to schedule something and any required detail is missing, ask specifically for it.
When you use tools, only call them with precise arguments.
Today's date is ${new Date().toDateString()}.`;

const FUNCTION_TOOLS = [
  {
    name: 'scheduleTask',
    description: 'Schedule a new task or study session for the user.',
    inputSchema: {
      type: 'object',
      properties: {
        subject: { type: 'string', description: 'The subject or title of the task.' },
        startTime: { type: 'string', description: 'The start time in HH:mm format.' },
        endTime: { type: 'string', description: 'The end time in HH:mm format.' },
        type: { type: 'string', description: "The type of task: 'HOMEWORK', 'REVISION', or 'EXAM'." },
        date: { type: 'string', description: 'Optional date in YYYY-MM-DD format.' },
      },
      required: ['subject', 'startTime', 'endTime', 'type'],
      additionalProperties: false,
    },
  },
  {
    name: 'getScheduleSummary',
    description: "Get a summary of the user's current tasks, schedule, and streak.",
    inputSchema: {
      type: 'object',
      properties: {},
      additionalProperties: false,
    },
  },
];

const PROVIDER_LABELS: Record<Provider, string> = {
  gemini: 'Google Gemini',
  openai: 'OpenAI',
  anthropic: 'Anthropic Claude',
  groq: 'Groq',
};

const PREFERRED_MODELS: Record<Provider, string[]> = {
  gemini: ['gemini-2.5-flash', 'gemini-2.5-pro'],
  openai: ['gpt-5.4-mini', 'gpt-5.5', 'gpt-5.4'],
  anthropic: ['claude-sonnet-4-20250514', 'claude-opus-4-1-20250805', 'claude-opus-4-20250514'],
  groq: ['llama-3.3-70b-versatile', 'openai/gpt-oss-20b', 'openai/gpt-oss-120b'],
};

async function safeJson(response: Response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

function pickModel(provider: Provider, models: string[]) {
  const preferred = PREFERRED_MODELS[provider];
  const matched = preferred.find((model) => models.includes(model));
  return matched ?? models[0] ?? preferred[0];
}

async function probeGemini(apiKey: string): Promise<DetectedProvider | null> {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`, {
    method: 'GET',
    cache: 'no-store',
  });

  if (!response.ok) return null;
  const data = await safeJson(response);
  const models = Array.isArray(data?.models)
    ? data.models
        .map((model: { name?: string }) => model.name?.replace(/^models\//, ''))
        .filter(Boolean)
    : [];

  return {
    provider: 'gemini',
    label: PROVIDER_LABELS.gemini,
    model: pickModel('gemini', models),
    models,
  };
}

async function probeOpenAI(apiKey: string): Promise<DetectedProvider | null> {
  const response = await fetch('https://api.openai.com/v1/models', {
    method: 'GET',
    headers: { Authorization: `Bearer ${apiKey}` },
    cache: 'no-store',
  });

  if (!response.ok) return null;
  const data = await safeJson(response);
  const models = Array.isArray(data?.data) ? data.data.map((model: { id?: string }) => model.id).filter(Boolean) : [];

  return {
    provider: 'openai',
    label: PROVIDER_LABELS.openai,
    model: pickModel('openai', models),
    models,
  };
}

async function probeAnthropic(apiKey: string): Promise<DetectedProvider | null> {
  const response = await fetch('https://api.anthropic.com/v1/models', {
    method: 'GET',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    cache: 'no-store',
  });

  if (!response.ok) return null;
  const data = await safeJson(response);
  const models = Array.isArray(data?.data) ? data.data.map((model: { id?: string }) => model.id).filter(Boolean) : [];

  return {
    provider: 'anthropic',
    label: PROVIDER_LABELS.anthropic,
    model: pickModel('anthropic', models),
    models,
  };
}

async function probeGroq(apiKey: string): Promise<DetectedProvider | null> {
  const response = await fetch('https://api.groq.com/openai/v1/models', {
    method: 'GET',
    headers: { Authorization: `Bearer ${apiKey}` },
    cache: 'no-store',
  });

  if (!response.ok) return null;
  const data = await safeJson(response);
  const models = Array.isArray(data?.data) ? data.data.map((model: { id?: string }) => model.id).filter(Boolean) : [];

  return {
    provider: 'groq',
    label: PROVIDER_LABELS.groq,
    model: pickModel('groq', models),
    models,
  };
}

export async function detectAIProvider(apiKey: string): Promise<DetectedProvider | null> {
  const trimmedKey = apiKey.trim();
  if (!trimmedKey) return null;

  const probes = [probeGemini, probeOpenAI, probeAnthropic, probeGroq];
  for (const probe of probes) {
    try {
      const match = await probe(trimmedKey);
      if (match) return match;
    } catch {
      continue;
    }
  }

  return null;
}

async function executeTool(name: string, args: unknown) {
  if (name === 'scheduleTask') {
    const payload = args as ToolArgs;
    await createQuickTask({
      subject: payload.subject,
      startTime: payload.startTime,
      endTime: payload.endTime,
      type: payload.type,
      date: payload.date ? new Date(payload.date) : undefined,
    });

    return {
      success: true,
      message: `Scheduled ${payload.subject} from ${payload.startTime} to ${payload.endTime}.`,
    };
  }

  if (name === 'getScheduleSummary') {
    const [tasks, events, streak] = await Promise.all([getAllTasks(), getEvents(), syncStreak()]);
    return { tasks, events, streak };
  }

  return { success: false, message: `Unknown tool: ${name}` };
}

function toPlainHistory(history: HistoryMessage[]): PersistedMessage[] {
  return history.map((message) => ({
    role: message.role === 'user' ? 'user' : 'model',
    text: message.parts.map((part) => part.text).join('\n'),
  }));
}

async function askGemini(
  apiKey: string,
  model: string,
  prompt: string,
  history: PersistedMessage[],
) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const geminiTools = [
    {
      functionDeclarations: FUNCTION_TOOLS.map((tool) => ({
        name: tool.name,
        description: tool.description,
        parameters: {
          type: 'OBJECT',
          properties: Object.fromEntries(
            Object.entries(tool.inputSchema.properties).map(([key, value]) => [key, { ...value, type: String(value.type).toUpperCase() }])
          ),
          required: tool.inputSchema.required,
        },
      })),
    },
  ];

  const chat = genAI
    .getGenerativeModel({ model, tools: geminiTools as never })
    .startChat({
      history: [
        { role: 'user', parts: [{ text: `System Instruction: ${SYSTEM_INSTRUCTION}` }] },
        ...history.map((message) => ({
          role: message.role,
          parts: [{ text: message.text }],
        })),
      ],
    });

  let result = await chat.sendMessage(prompt);

  while (true) {
    const calls = result.response.functionCalls();
    if (!calls?.length) {
      return { text: result.response.text() };
    }

    const toolResults = await Promise.all(
      calls.map(async (call) => ({
        functionResponse: {
          name: call.name,
          response: await executeTool(call.name, call.args),
        },
      }))
    );

    result = await chat.sendMessage(toolResults as never);
  }
}

async function askOpenAI(
  apiKey: string,
  model: string,
  prompt: string,
  history: PersistedMessage[],
) {
  const inputList: unknown[] = [
    ...history.map((message) => ({
      role: message.role === 'model' ? 'assistant' : 'user',
      content: [{ type: 'input_text', text: message.text }],
    })),
    {
      role: 'user',
      content: [{ type: 'input_text', text: prompt }],
    },
  ];

  while (true) {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        instructions: SYSTEM_INSTRUCTION,
        tools: FUNCTION_TOOLS.map((tool) => ({
          type: 'function',
          name: tool.name,
          description: tool.description,
          parameters: tool.inputSchema,
        })),
        input: inputList,
      }),
      cache: 'no-store',
    });

    const data = await safeJson(response);
    if (!response.ok) {
      throw new Error(data?.error?.message || 'OpenAI request failed.');
    }

    const output = Array.isArray(data?.output) ? data.output : [];
    const functionCalls = output.filter((item: { type?: string }) => item.type === 'function_call');

    if (functionCalls.length === 0) {
      return { text: data?.output_text || 'No response returned.' };
    }

    inputList.push(...output);

    for (const call of functionCalls) {
      const args = call.arguments ? JSON.parse(call.arguments) : {};
      const toolOutput = await executeTool(call.name, args);
      inputList.push({
        type: 'function_call_output',
        call_id: call.call_id,
        output: JSON.stringify(toolOutput),
      });
    }
  }
}

async function askAnthropic(
  apiKey: string,
  model: string,
  prompt: string,
  history: PersistedMessage[],
) {
  const messages: unknown[] = [
    ...history.map((message) => ({
      role: message.role === 'model' ? 'assistant' : 'user',
      content: [{ type: 'text', text: message.text }],
    })),
    {
      role: 'user',
      content: [{ type: 'text', text: prompt }],
    },
  ];

  while (true) {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model,
        max_tokens: 2048,
        system: SYSTEM_INSTRUCTION,
        tools: FUNCTION_TOOLS.map((tool) => ({
          name: tool.name,
          description: tool.description,
          input_schema: tool.inputSchema,
        })),
        messages,
      }),
      cache: 'no-store',
    });

    const data = await safeJson(response);
    if (!response.ok) {
      throw new Error(data?.error?.message || 'Anthropic request failed.');
    }

    const content = Array.isArray(data?.content) ? data.content : [];
    messages.push({ role: 'assistant', content });

    const toolBlocks = content.filter((block: { type?: string }) => block.type === 'tool_use');
    if (toolBlocks.length === 0) {
      const text = content
        .filter((block: { type?: string }) => block.type === 'text')
        .map((block: { text?: string }) => block.text || '')
        .join('\n')
        .trim();
      return { text: text || 'No response returned.' };
    }

    const toolResults = await Promise.all(
      toolBlocks.map(async (block: { id: string; name: string; input: unknown }) => ({
        type: 'tool_result',
        tool_use_id: block.id,
        content: JSON.stringify(await executeTool(block.name, block.input)),
      }))
    );

    messages.push({ role: 'user', content: toolResults });
  }
}

async function askGroq(
  apiKey: string,
  model: string,
  prompt: string,
  history: PersistedMessage[],
) {
  const messages = [
    { role: 'system', content: SYSTEM_INSTRUCTION },
    ...history.map((message) => ({
      role: message.role === 'model' ? 'assistant' : 'user',
      content: message.text,
    })),
    { role: 'user', content: prompt },
  ];

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.4,
    }),
    cache: 'no-store',
  });

  const data = await safeJson(response);
  if (!response.ok) {
    throw new Error(data?.error?.message || 'Groq request failed.');
  }

  return { text: data?.choices?.[0]?.message?.content || 'No response returned.' };
}

export async function checkAIAvailability() {
  const userId = await getUserId();
  if (!userId) return { available: false, error: 'Unauthorized' };

  const progress = await prisma.userProgress.findUnique({ where: { userId } });
  return { available: !!progress?.geminiApiKey };
}

export async function saveAIKey(rawKey: string) {
  const userId = await getUserId();
  if (!userId) return { success: false, error: 'Unauthorized' };

  const key = rawKey.trim();
  if (!key) return { success: false, error: 'API key is required.' };

  const detected = await detectAIProvider(key);
  if (!detected) {
    return { success: false, error: 'This key did not validate against the supported providers.' };
  }

  await prisma.userProgress.upsert({
    where: { userId },
    update: { geminiApiKey: key },
    create: { userId, geminiApiKey: key },
  });

  revalidatePath('/ai');
  revalidatePath('/settings');

  return {
    success: true,
    provider: detected.label,
    model: detected.model,
  };
}

export async function createChatSession(title: string = 'New Chat') {
  const userId = await getUserId();
  if (!userId) throw new Error('Unauthorized');

  const session = await prisma.chatSession.create({
    data: { userId, title },
  });

  revalidatePath('/ai');
  return session;
}

export async function getChatSessions() {
  const userId = await getUserId();
  if (!userId) return [];

  return prisma.chatSession.findMany({
    where: { userId },
    orderBy: { updatedAt: 'desc' },
  });
}

export async function getChatMessages(sessionId: string) {
  const userId = await getUserId();
  if (!userId) return [];

  return prisma.chatMessage.findMany({
    where: { sessionId, session: { userId } },
    orderBy: { createdAt: 'asc' },
  });
}

export async function deleteChatSession(sessionId: string) {
  const userId = await getUserId();
  if (!userId) return;

  await prisma.chatSession.deleteMany({ where: { id: sessionId, userId } });
  revalidatePath('/ai');
}

export async function askAIBuddy(prompt: string, history: HistoryMessage[], sessionId?: string) {
  const userId = await getUserId();
  if (!userId) throw new Error('Unauthorized');

  const progress = await prisma.userProgress.findUnique({ where: { userId } });
  const apiKey = progress?.geminiApiKey?.trim();
  if (!apiKey) {
    return { error: 'No AI API key found. Please add one first.' };
  }

  const detected = await detectAIProvider(apiKey);
  if (!detected) {
    return { error: 'The saved API key is no longer valid for a supported provider.' };
  }

  let activeSessionId = sessionId;
  if (activeSessionId) {
    const ownedSession = await prisma.chatSession.findFirst({
      where: { id: activeSessionId, userId },
      select: { id: true },
    });
    if (!ownedSession) activeSessionId = undefined;
  }

  if (activeSessionId) {
    await prisma.chatMessage.create({
      data: { sessionId: activeSessionId, role: 'user', content: prompt },
    });
    await prisma.chatSession.update({
      where: { id: activeSessionId },
      data: { updatedAt: new Date() },
    });
  }

  try {
    const plainHistory = toPlainHistory(history);
    const result =
      detected.provider === 'gemini'
        ? await askGemini(apiKey, detected.model, prompt, plainHistory)
        : detected.provider === 'openai'
          ? await askOpenAI(apiKey, detected.model, prompt, plainHistory)
          : detected.provider === 'anthropic'
            ? await askAnthropic(apiKey, detected.model, prompt, plainHistory)
            : await askGroq(apiKey, detected.model, prompt, plainHistory);

    if (activeSessionId && result.text) {
      await prisma.chatMessage.create({
        data: { sessionId: activeSessionId, role: 'model', content: result.text },
      });
      await prisma.chatSession.update({
        where: { id: activeSessionId },
        data: { updatedAt: new Date() },
      });
    }

    return {
      text: result.text,
      provider: detected.label,
      model: detected.model,
    };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to communicate with AI.';
    console.error('AI Buddy Error:', error);
    return { error: message };
  }
}
