import { Suspense } from "react";

import ThoughtInput from "./components/ThoughtInput";
import ThoughtsReel from "./components/ThoughtsReel";
import ThoughtsReelFallback from "./components/ThoughtsReelFallback";

export const experimental_ppr = true;

export default async function Feed() {
  return (
    <main className="flex grow px-10 pb-5 gap-5 justify-around">
      <div className="flex flex-col grow p-5 h-96 bg-white rounded-3xl">
        <h3 className="text-xl font-bold">Following</h3>
      </div>
      <div className="flex grow-[2] flex-col gap-5">
        <ThoughtInput />
        <Suspense fallback={<ThoughtsReelFallback />}>
          <ThoughtsReel />
        </Suspense>
      </div>
      <div className="flex flex-col grow p-5 h-96 bg-white rounded-3xl">
        <h3 className="text-xl font-bold">Themes</h3>
      </div>
    </main>
  );
}
