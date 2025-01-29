import React from "react";
import { auth } from "@/auth";
import { AppRoute } from "@/libs/enums";
import { redirect } from "next/navigation";
import { SessionProvider } from "next-auth/react";

import "@/app/globals.css";

import { Header } from "@/components";

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session) {
    redirect(AppRoute.SIGN_IN);
  }
  return (
    <html className="min-h-full" lang="en">
      <body className="flex flex-col h-full bg-gradient-to-b from-[#FFB2DF] to-[#FF67C0]">
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
