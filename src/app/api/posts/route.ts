import { NextResponse } from "next/server"
import { posts } from "./data"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const category = url.searchParams.get("category") || "One Piece"

  const delay = Math.floor(Math.random() * 1500) + 300
  await new Promise((resolve) => setTimeout(resolve, delay))

  if (Math.random() < 0.1) {
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    )
  }

  if (category in posts) {
    return NextResponse.json(posts[category])
  } else {
    return NextResponse.json([])
  }
}
