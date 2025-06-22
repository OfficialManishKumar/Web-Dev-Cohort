import { PrismaClient } from "../generated/prisma/index.js";

const globalForPrisma : any = globalThis;

export const db = globalForPrisma.prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production"){globalForPrisma.prisma = db}