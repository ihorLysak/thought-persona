"use client";

import React, { useCallback, useState } from "react";
import { Heart } from "lucide-react";
import { Thought } from "@/libs/types";
import { resolveLike } from "@/libs/actions";

interface Properties {
  userId: string;
  thought: Thought;
}

export default function LikesWidget({ userId, thought }: Properties) {
  const [isLiked, setIsLiked] = useState<boolean>(initializeIsLiked);
  const [likesCount, setLikesCount] = useState<number>(thought.likes.length);

  function initializeIsLiked(): boolean {
    return thought.likes.some((like) => like.userId === userId);
  }

  const handleClick = useCallback(() => {
    resolveLike(userId, thought.id);
    console.log("clicked");

    if (isLiked) {
      setIsLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      setIsLiked(true);
      setLikesCount(likesCount + 1);
    }
  }, [isLiked, likesCount]);

  return (
    <div className="flex gap-1 self-end items-center">
      <Heart
        className="transition hover:fill-[#f9a8d4]"
        fill={isLiked ? "#f9a8d4" : "#00000000"}
        color="#f9a8d4"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
      <span className="text-neutral-400 text-xl">{likesCount}</span>
    </div>
  );
}
