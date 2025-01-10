import React from "react";
import { auth } from "@/auth";
import { AppRoute } from "@/libs/enums";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (!session) {
    redirect(AppRoute.SIGN_IN);
  }

  return <div>hello world</div>;
}
