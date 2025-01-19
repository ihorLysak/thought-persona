import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    nickname?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    nickname: string;
  }
}
