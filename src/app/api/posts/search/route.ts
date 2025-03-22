import { NextResponse } from "next/server"
import { Post, posts } from "../data"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get("q") || ""

  const delay = Math.floor(Math.random() * 1500) + 500
  await new Promise((resolve) => setTimeout(resolve, delay))

  if (Math.random() < 0.1) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    )
  }

  if (!searchTerm) {
    return NextResponse.json([])
  }

  const searchTermLower = searchTerm.toLowerCase()
  const allResults: Post[] = []

  for (const category in posts) {
    const categoryPosts = posts[category]

    const filteredPosts = categoryPosts?.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTermLower) ||
        post.body.toLowerCase().includes(searchTermLower)
    )

    allResults.push(...(filteredPosts ?? []))
  }

  return NextResponse.json(allResults)
}
