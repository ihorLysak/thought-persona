import { Thought } from "@/libs/types";

interface Properties {
  thought: Thought;
}

function ThoughtContainer({ thought }: Properties) {
  console.log(thought);
  return (
    <div className="flex flex-col gap-3 border-2 border-neutral-400 rounded-xl p-5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-neutral-400 rounded-full" />
        <span>{thought.author.name}</span>
      </div>
      <div className="border-2 border-neutral-400 rounded-lg p-2">
        {thought.text}
      </div>
    </div>
  );
}

export { ThoughtContainer };
