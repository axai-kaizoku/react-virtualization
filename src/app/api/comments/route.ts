import { NextResponse } from "next/server"
import { Comment, comments } from "./data"
import { getComments } from "./helper"

export type CommentsResponse = {
  comments: Comment[]
  nextCursor: number | null
  totalComments: number
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const cursorParam = url.searchParams.get("cursor")
  const cursor = cursorParam ? parseInt(cursorParam, 10) : undefined

  const pageSize = 5

  const delay = Math.floor(Math.random() * 700) + 300
  await new Promise((resolve) => setTimeout(resolve, delay))

  if (Math.random() < 0.1) {
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    )
  }

  const { data, nextCursor } = getComments(pageSize, cursor)

  const response: CommentsResponse = {
    comments: data,
    nextCursor,
    totalComments: comments.length
  }

  return NextResponse.json(response)
}

export async function POST(request: Request) {
  const { text } = await request.json()

  if (!text) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    )
  }

  const delay = Math.floor(Math.random() * 700) + 300
  await new Promise((resolve) => setTimeout(resolve, delay))

  if (Math.random() < 0.1) {
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    )
  }

  const currentUser = {
    name: "Axai Kaizoku",
    avatar: "AX"
  }

  const newComment: Comment = {
    id: Date.now(),
    user: currentUser,
    text,
    createdAt: new Date().toISOString()
  }

  comments.unshift(newComment)

  return NextResponse.json({
    comment: newComment
  })
}
