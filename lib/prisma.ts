import { PrismaClient } from './generated/prisma_v10';

const globalForPrisma = global as unknown as { prismaV10: PrismaClient };

export const prisma = globalForPrisma.prismaV10 || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaV10 = prisma;
