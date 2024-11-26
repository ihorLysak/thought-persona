"use client";

import { useCallback, useState, FormEvent } from "react";
import { useSession } from "next-auth/react";
import { createThought } from "@/libs/actions";

import { Button } from "@/components";

export default function ThoughtInput() {
  const [thought, setThought] = useState("");
  const { data: session } = useSession();

  const handleThoughtChange = useCallback(
    (e: FormEvent<HTMLTextAreaElement>) => {
      setThought(e.currentTarget.value);
    },
    []
  );

  const handlePostThought = (formData: FormData) => {
    const text = formData.get("text") as string;
    setThought("");
    createThought(text, session?.user?.id as string);
  };

  return (
    <form
      action={handlePostThought}
      className="flex items-end flex-col gap-2 bg-white p-5 rounded-3xl"
    >
      <div className="flex w-full flex-col gap-2">
        <label className="text-3xl font-bold" htmlFor="text">
          New thought:
        </label>
        <textarea
          className="flex w-full border-2 border-neutral-400 rounded-xl resize-none px-2 py-1"
          name="text"
          id="text"
          value={thought}
          onChange={handleThoughtChange}
          rows={4}
          maxLength={280}
        ></textarea>
        <span className="text-neutral-400">{thought.length}/280</span>
      </div>
      <Button label="post" />
    </form>
  );
}
