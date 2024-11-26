import React from "react";
import { auth } from "@/auth";
import { AppRoute } from "@/libs/enums";
import { redirect } from "next/navigation";
import { SessionProvider } from "next-auth/react";

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
    <SessionProvider>
      <Header />
      {children}
    </SessionProvider>
  );
}
