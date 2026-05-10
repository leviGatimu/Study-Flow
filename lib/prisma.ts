import { PrismaClient } from './generated/prisma_v14';

const globalForPrisma = global as unknown as { prismaV14: PrismaClient };

export const prisma = globalForPrisma.prismaV14 || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaV14 = prisma;
