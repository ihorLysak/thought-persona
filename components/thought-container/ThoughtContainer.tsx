import Link from "next/link";
import { Thought } from "@/libs/types";
import LikesWidget from "./components/LikesWidget";
import { AppRoute } from "@/libs/enums";

interface Properties {
  userId: string;
  thought: Thought;
}

function ThoughtContainer({ userId, thought }: Properties) {
  return (
    <div className="flex flex-col gap-3 border-2 border-neutral-400 rounded-xl p-5">
      <div className="flex items-center gap-2">
        <Link
          className="flex items-center gap-2 transition hover:text-[#FF67C0]"
          href={`${AppRoute.PROFILE}/${thought.author.id}`}
        >
          <div className="w-8 h-8 bg-neutral-400 rounded-full" />
          <span>{thought.author.name}</span>
        </Link>
        <span className="text-neutral-400">@{thought.author.nickname}</span>
      </div>
      <div className="border-2 border-neutral-400 rounded-lg p-2">
        {thought.text}
      </div>
      <LikesWidget userId={userId} thought={thought} />
    </div>
  );
}

export { ThoughtContainer };
