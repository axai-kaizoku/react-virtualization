import { Comment, comments } from "./data"

export const getComments = (
  take: number,
  cursor?: number
): { data: Comment[]; nextCursor: number | null } => {
  let startIndex = 0

  if (cursor) {
    const cursorIndex = comments.findIndex((comment) => comment.id === cursor)
    if (cursorIndex !== -1) {
      startIndex = cursorIndex
    }
  }

  const fetchedItems = comments.slice(startIndex, startIndex + take + 1)

  const nextCursor = fetchedItems.length > take ? fetchedItems[take]!.id : null

  return {
    data: fetchedItems.slice(0, take),
    nextCursor
  }
}
