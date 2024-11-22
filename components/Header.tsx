"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { Settings, LogOut } from "lucide-react";

import { Button } from "./Button";
import { LinkButton } from "./LinkButton";

import { AppRoute } from "@/libs/enums";
import { useCallback } from "react";

function Header() {
  const handleSignOut = useCallback(() => {
    signOut();
  }, []);
  return (
    <div className="flex items-center w-full p-5 justify-between">
      <Link
        href={AppRoute.FEED}
        className="text-white text-3xl font-bold transition hover:text-neutral-200"
      >
        ThoughtPersona
      </Link>
      <div className="flex gap-5">
        <LinkButton href={AppRoute.SETTINGS} label={<Settings />} />
        <Button label={<LogOut />} onClick={handleSignOut} type="white" />
      </div>
    </div>
  );
}

export { Header };
