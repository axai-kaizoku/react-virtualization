"use client"
import { Post } from "@/app/api/posts/data"
import { fetchData } from "@/lib/fetch-utils"
import { useQuery } from "@tanstack/react-query"

export const FetchWithReactQuery = ({ category }: { category: string }) => {
  const {
    data: posts,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["get-posts", category],
    queryFn: () => fetchData<Post[]>(`/api/posts?category=${category}`)
  })
  return (
    <div className="p-4 text-neutral-100">
      <h2 className="text-xl font-bold mb-4 flex gap-2">
        <span className="capitalize">{category}</span>
        <span>Posts</span>
      </h2>

      {isLoading && <div className="mb-4 text-blue-500">Loading posts...</div>}

      {isError && (
        <div className="mb-4 text-red-400">Error: {error.message}</div>
      )}

      {posts?.length === 0 && !isError && !isLoading && (
        <div className="mb-4">No posts found in this category</div>
      )}

      {posts && posts.length > 0 && (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border p-3 rounded">
              <h3 className="font-semibold">{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
