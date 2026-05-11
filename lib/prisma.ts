import { PrismaClient } from './generated/prisma_v19';

const globalForPrisma = global as unknown as { prismaV19: PrismaClient };

export const prisma = globalForPrisma.prismaV19 || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaV19 = prisma;
