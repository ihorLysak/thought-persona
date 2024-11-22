import React from "react";
import { auth } from "@/auth";
import { AppRoute } from "@/libs/enums";
import { redirect } from "next/navigation";

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
    <div className="flex flex-col grow">
      <Header />
      {children}
    </div>
  );
}
