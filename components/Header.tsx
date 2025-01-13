"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { Settings, LogOut } from "lucide-react";
import { useSession } from "next-auth/react";

import { Button } from "./Button";
import { LinkButton } from "./LinkButton";

import { AppRoute } from "@/libs/enums";
import { useCallback } from "react";

function Header() {
  const handleSignOut = useCallback(() => {
    signOut();
  }, []);

  const { data: session } = useSession();

  return (
    <div className="flex items-center w-full p-5 justify-between">
      <Link
        href={AppRoute.FEED}
        className="text-white text-3xl font-bold transition hover:text-neutral-200"
      >
        ThoughtPersona
      </Link>
      <div className="flex gap-5">
        <Link href={`${AppRoute.PROFILE}/${session?.user?.id}`}>
          <div className="h-10 w-10 bg-neutral-500 rounded-full" />
        </Link>
        <LinkButton href={AppRoute.SETTINGS} label={<Settings />} />
        <Button label={<LogOut />} onClick={handleSignOut} type="white" />
      </div>
    </div>
  );
}

export { Header };
