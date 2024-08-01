import { PrismaClient } from "@prisma/client";
import { decl } from "postcss";

declare global {
    var db: PrismaClient|undefined;

}
export const db = global.db || new PrismaClient();
if (process.env.NODE_ENV === "production") {
    global.prisma = db;
}