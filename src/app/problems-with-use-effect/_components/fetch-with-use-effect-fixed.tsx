import { Post } from "@/app/api/posts/data"
import { fetchData } from "@/lib/fetch-utils"
import { useEffect, useState } from "react"

export const FetchWithUseEffectFixed = ({ category }: { category: string }) => {
  const [posts, setPosts] = useState<Post[]>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string>()

  useEffect(() => {
    let ignore = false
    setIsLoading(true)

    const fetchPosts = async () => {
      try {
        const data = await fetchData<Post[]>(`/api/posts?category=${category}`)
        if (!ignore) {
          setPosts(data)
          setError(undefined)
        }
      } catch (error) {
        if (!ignore) {
          console.error("Fetch error: ", error)
          setError("Failed to fetch posts")
          setPosts(undefined)
        }
      } finally {
        if (!ignore) {
          setIsLoading(false)
        }
      }
    }

    fetchPosts()

    return () => {
      ignore = true
    }
  }, [category])

  return (
    <div className="p-4 text-neutral-100">
      <h2 className="text-xl font-bold mb-4 flex gap-2">
        <span className="capitalize">{category}</span>
        <span>Posts</span>
      </h2>

      <div>
        {isLoading ? (
          <div className="mb-4 text-blue-500">Loading posts...</div>
        ) : (
          <>
            {error && <div className="mb-4 text-red-400">Error: {error}</div>}

            {posts?.length === 0 && !error && (
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
          </>
        )}
      </div>
    </div>
  )
}
