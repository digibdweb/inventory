import { PrismaClient } from "@prisma/client";
const globalForPrisma = globalThis as unknown as {
    Prisma:PrismaClient | undefined
}
export const prisma = globalForPrisma.Prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.Prisma = prisma