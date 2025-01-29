import React from "react";
import { LoaderCircle } from "lucide-react";

export default function ThoughtsReelFallback() {
  return (
    <div className="flex flex-col gap-5 grow w-full  p-5 bg-white rounded-3xl ">
      <div className="flex flex-col animate-pulse gap-10">
        <h2 className="text-2xl font-bold ">Thoughts</h2>
        <LoaderCircle className="animate-spin self-center" size={96} />
      </div>
    </div>
  );
}
