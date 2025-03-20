import Link from "next/link"

export default function HomePage() {
  const cardsData = [
    {
      path: "/problems-with-use-effect",
      title: "Problems with useEffect",
      desc: "See why traditional data fetching with useEffect is problematic and how to fix common issues."
    },
    {
      path: "/basic-react-query",
      title: "Basic React Query",
      desc: "Learn how React Query simplifies data fetching with automatic state management and caching."
    },
    {
      path: "/search-query",
      title: "Debounced Search with React Query",
      desc: "Learn how to implement a debounced search feature with React Query to optimize data fetching."
    },
    {
      path: "/infinite-query",
      title: "Infinite Queries",
      desc: "Explore how to implement infinite scrolling and pagination with useInfiniteQuery."
    },
    {
      path: "/infinite-query",
      title: "Mutations with React Query",
      desc: "Learn how to create, update, and delete data using useMutation with proper error handling."
    },
    {
      path: "/infinite-query",
      title: "Optimistic Updates",
      desc: "Improve user experience by updating the UI optimistically before server confirmation."
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#262626] to-[#161616] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          React <span className="neu text-cyan-400">Query</span> v5
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:row-span-2 sm:grid-cols-3 md:gap-8">
          {cardsData.map((card) => (
            <Link
              key={card.title}
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href={card.path}
            >
              <h3 className="text-xl font-bold ">{`${card.title} →`}</h3>
              <div className="text-lg">{card.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
