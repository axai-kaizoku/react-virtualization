"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"

export const CommentForm = () => {
  const [commentText, setCommentText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!commentText.trim()) return

    setCommentText("")
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment..."
        className="flex-1"
      />

      <Button type="submit" disabled={!commentText.trim()}>
        Post
      </Button>
    </form>
  )
}
