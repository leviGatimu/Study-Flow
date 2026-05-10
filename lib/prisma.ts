import { PrismaClient } from './generated/prisma_v12';

const globalForPrisma = global as unknown as { prismaV12: PrismaClient };

export const prisma = globalForPrisma.prismaV12 || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaV12 = prisma;
