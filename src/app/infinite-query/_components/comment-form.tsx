"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import {
  useCreateCommentMutation,
  useCreateCommentMutationOptimistic
} from "./use-comments-hooks"
import { toast } from "sonner"

export const CommentForm = () => {
  const [commentText, setCommentText] = useState("")

  // const mutation = useCreateCommentMutation()
  const mutation = useCreateCommentMutationOptimistic()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!commentText.trim()) return

    mutation.mutate(
      { text: commentText },
      {
        onSuccess: () => {
          setCommentText("")
          toast.success("Comment posted successfully!")
        },
        onError: () => {
          toast.error("Failed to post comment")
        }
      }
    )
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment..."
        className="flex-1"
        disabled={mutation.isPending}
      />

      <Button
        type="submit"
        disabled={!commentText.trim() || mutation.isPending}
      >
        {mutation.isPending ? "Posting..." : "Post"}
      </Button>
    </form>
  )
}
