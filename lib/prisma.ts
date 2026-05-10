import { PrismaClient } from './generated/prisma_v11';

const globalForPrisma = global as unknown as { prismaV11: PrismaClient };

export const prisma = globalForPrisma.prismaV11 || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaV11 = prisma;
