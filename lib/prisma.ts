import { PrismaClient } from './generated/prisma_v7';

const globalForPrisma = global as unknown as { prismaV7: PrismaClient };

export const prisma = globalForPrisma.prismaV7 || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaV7 = prisma;
