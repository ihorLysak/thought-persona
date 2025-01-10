import { auth } from "@/auth";
import { ThoughtContainer } from "@/components";
import { Thought } from "@/libs/types";

export default async function ThoughtsReel() {
  const data = await fetch(`http://localhost:3000/api/thoughts`);
  const thoughts = (await data.json()) as Thought[];

  const session = await auth();

  return (
    <div className="flex flex-col gap-5 grow w-full  p-5 bg-white rounded-3xl">
      <h2 className="text-2xl font-bold">Thoughts</h2>
      {thoughts.map((thought) => {
        return (
          <ThoughtContainer
            key={thought.id}
            thought={thought}
            userId={session?.user?.id as string}
          />
        );
      })}
    </div>
  );
}
