"use client";

import Link from "next/link";
import { Button } from "./Button";
import { LinkButton } from "./LinkButton";
import { signOut } from "next-auth/react";

import { AppRoute } from "@/libs/enums";
import { useCallback } from "react";

function Header() {
  const handleSignOut = useCallback(() => {
    signOut();
  }, []);
  return (
    <div className="flex items-center w-full p-5 justify-between">
      <Link href={AppRoute.FEED} className="text-white text-3xl font-bold">
        Thought Persona
      </Link>
      <div className="flex gap-5">
        <LinkButton href={AppRoute.SETTINGS} label="settings" />
        <Button label="sign out" onClick={handleSignOut} />
      </div>
    </div>
  );
}

export { Header };
