"use client";

import { useCallback, useState, FormEvent } from "react";

import { Button } from "@/components";

export default function ThoughtInput() {
  const [thought, setThought] = useState("");

  const handleThoughtChange = useCallback(
    (e: FormEvent<HTMLTextAreaElement>) => {
      setThought(e.currentTarget.value);
    },
    []
  );

  return (
    <form className="flex items-end flex-col gap-2 bg-white p-5 rounded-3xl">
      <div className="flex w-full flex-col gap-2">
        <label className="text-3xl font-bold" htmlFor="thoughtContent">
          New thought:
        </label>
        <textarea
          className="flex w-full border-2 border-neutral-300 rounded-xl resize-none px-2 py-1"
          name="thoughtContent"
          id="thoughtContent"
          value={thought}
          onChange={handleThoughtChange}
          rows={4}
          maxLength={280}
        ></textarea>
        <span className="text-neutral-300">{thought.length}/280</span>
      </div>
      <Button label="post" />
    </form>
  );
}
