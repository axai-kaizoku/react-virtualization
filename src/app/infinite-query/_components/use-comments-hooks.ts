import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  useMutation,
  useQueryClient
} from "@tanstack/react-query"
import { fetchData, postData } from "@/lib/fetch-utils"
import { CommentsResponse } from "@/app/api/comments/route"
import { Comment } from "@/app/api/comments/data"

const commentQueryKey: QueryKey = ["comments"]

export function useCommentsQuery() {
  return useInfiniteQuery({
    queryKey: commentQueryKey,
    queryFn: ({ pageParam }) =>
      fetchData<CommentsResponse>(
        `/api/comments?${pageParam ? `cursor=${pageParam}` : ""}`
      ),
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor
  })
}

export function useCreateCommentMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (newComment: { text: string }) =>
      postData<{ comment: Comment }>("/api/comments", newComment),
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ["comments"] })
    // },
    // onSuccess: () => {
    //   return queryClient.invalidateQueries({ queryKey: ["comments"] })
    // },
    onSuccess: async ({ comment }) => {
      await queryClient.cancelQueries({ queryKey: commentQueryKey })

      queryClient.setQueryData<
        InfiniteData<CommentsResponse, number | undefined>
      >(commentQueryKey, (oldData) => {
        const firstPage = oldData?.pages[0]

        if (firstPage) {
          return {
            ...oldData,
            pages: [
              {
                ...firstPage,
                totalComments: firstPage.totalComments + 1,
                comments: [comment, ...firstPage.comments]
              },
              ...oldData.pages.slice(1)
            ]
          }
        }
      })
    }
  })
}

export function useCreateCommentMutationOptimistic() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (newComment: { text: string }) =>
      postData<{ comment: Comment }>("/api/comments", newComment),
    onMutate: async (newComment) => {
      await queryClient.cancelQueries({ queryKey: commentQueryKey })

      const previousData =
        queryClient.getQueryData<
          InfiniteData<CommentsResponse, number | undefined>
        >(commentQueryKey)

      const optimisticComment: Comment = {
        id: Date.now(),
        text: newComment.text,
        user: {
          name: "Akshay",
          avatar: "AK"
        },
        createdAt: new Date().toISOString()
      }

      queryClient.setQueryData<
        InfiniteData<CommentsResponse, number | undefined>
      >(commentQueryKey, (oldData) => {
        const firstPage = oldData?.pages[0]

        if (firstPage) {
          return {
            ...oldData,
            pages: [
              {
                ...firstPage,
                totalComments: firstPage.totalComments + 1,
                comments: [optimisticComment, ...firstPage.comments]
              },
              ...oldData.pages.slice(1)
            ]
          }
        }
      })

      return { previousData }
    },
    onError(error, variables, context) {
      queryClient.setQueryData(commentQueryKey, context?.previousData)
    }
  })
}
