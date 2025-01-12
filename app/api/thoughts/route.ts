import { NextResponse } from "next/server";
import { prisma } from "@/prisma";

export async function GET() {
  try {
    const thoughts = await prisma.thought.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: true,
        likes: true,
      },
    });
    return NextResponse.json(thoughts);
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error: ", error.stack);
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
