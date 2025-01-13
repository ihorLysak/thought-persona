import { Thought } from "@/libs/types";
import LikesWidget from "./components/LikesWidget";

interface Properties {
  userId: string;
  thought: Thought;
}

function ThoughtContainer({ userId, thought }: Properties) {
  return (
    <div className="flex flex-col gap-3 border-2 border-neutral-400 rounded-xl p-5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-neutral-400 rounded-full" />
        <span>{thought.author.name}</span>
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
