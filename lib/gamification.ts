import { prisma } from './prisma';

export const RANKS = [
  { minLevel: 1, maxLevel: 5, name: "Novice", color: "text-slate-400" },
  { minLevel: 6, maxLevel: 15, name: "Scholar", color: "text-blue-500" },
  { minLevel: 16, maxLevel: 30, name: "Sage", color: "text-emerald-500" },
  { minLevel: 31, maxLevel: 50, name: "Master", color: "text-purple-500" },
  { minLevel: 51, maxLevel: 999, name: "Polymath", color: "text-orange-500" },
];

export function getRankInfo(level: number) {
  return RANKS.find(r => level >= r.minLevel && level <= r.maxLevel) || RANKS[0];
}

export function getXpForNextLevel(level: number) {
  return level * 1000;
}

export async function addXp(userId: string, amount: number) {
  const progress = await prisma.userProgress.findUnique({
    where: { userId }
  });

  if (!progress) return;

  let newXp = progress.xp + amount;
  let newLevel = progress.level;

  while (newXp >= getXpForNextLevel(newLevel)) {
    newXp -= getXpForNextLevel(newLevel);
    newLevel++;
  }

  await prisma.userProgress.update({
    where: { userId },
    data: {
      xp: newXp,
      level: newLevel
    }
  });

  return { xpGained: amount, newLevel, leavedUp: newLevel > progress.level };
}
