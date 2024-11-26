import { NextResponse } from "next/server";
import { prisma } from "@/prisma";

export async function GET() {
  try {
    const thoughts = await prisma.thought.findMany({
      orderBy: {
        createdAt: "desc",
      },
      omit: {
        authorId: true,
      },
      include: {
        author: true,
      },
    });
    return NextResponse.json(thoughts);
  } catch (error) {
    console.log("error when fetching thoughts: ", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
