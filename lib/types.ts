import { Task, ScheduleTemplate, Project, ProjectDoc, ChatSession, ChatMessage, ExamEvent, UserProgress, Resource, MasteryItem, WeeklySummary } from '@prisma/client';

export type TaskWithTemplate = Task & {
  template: ScheduleTemplate | null;
  isUrgent?: boolean;
};

export type ProjectWithDocs = Project & {
  docs: ProjectDoc[];
};

export type ChatSessionWithMessages = ChatSession & {
  messages: ChatMessage[];
};

export { 
  type Task, 
  type ScheduleTemplate, 
  type Project, 
  type ProjectDoc, 
  type ChatSession, 
  type ChatMessage, 
  type ExamEvent, 
  type UserProgress,
  type Resource,
  type MasteryItem,
  type WeeklySummary
};
