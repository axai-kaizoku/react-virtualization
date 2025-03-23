"use client"
import { Button } from "@/components/ui/button"
import { posts } from "../api/posts/data"
import { useState } from "react"
import { FetchWithReactQuery } from "./_components/fetch-with-react-query"

const categories = [...Object.keys(posts), "Empty"]

export default function Page() {
  const [category, setCategory] = useState<string>(categories[0]!)

  return (
    <section className="max-w-5xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">Basic React Query Example</h1>
        <p className="mb-4">
          This example shows how React Query simplifies data fetching compared
          to using useEffect.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">Select a Category</h2>
        <div className="flex space-x-2 mb-4">
          {categories.map((cat) => (
            <Button
              variant={category === cat ? "default" : "outline"}
              onClick={() => setCategory(cat)}
              key={cat}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-neutral-800">
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-green-100 p-3 font-medium border-b">
            React Query Example
          </div>
          <FetchWithReactQuery category={category} />
        </div>
      </div>

      <div className="mt-8 space-y-4 bg-neutral-800/80 text-neutral-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold">Key Benefits of React Query</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>No need to manage loading, error, or data states manually</li>
          <li>Automatic request cancellation on component unmount</li>
          <li>Automatic caching and refetching with configurable settings</li>
          <li>No race conditions to worry about</li>
          <li>Much simpler and more declarative API</li>
        </ul>
      </div>
    </section>
  )
}
