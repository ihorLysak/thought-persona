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

export { createThought };
