"use server";

import { prisma } from "@/prisma";
import { revalidatePath } from "next/cache";
import { AppRoute } from "./enums";

async function createThought(text: string, authorId: string) {
  await prisma.thought.create({
    data: {
      text,
      authorId,
    },
  });

  revalidatePath(AppRoute.FEED);
}

async function resolveLike(userId: string, thoughtId: string) {
  const likesForTargetThought = await prisma.thoughtLikes.findMany({
    where: {
      thoughtId,
    },
  });

  const targetLike = likesForTargetThought.find(
    (entry) => entry.userId === userId
  );

  if (targetLike) {
    await prisma.thoughtLikes.delete({
      where: {
        id: targetLike.id,
      },
    });
  } else {
    await prisma.thoughtLikes.create({
      data: {
        userId,
        thoughtId,
      },
    });
  }
}

export { createThought, resolveLike };
