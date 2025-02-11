import { queryOptions } from "@tanstack/react-query"

export type Photo = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export const createDataQueryOptions = () => {
  return queryOptions({
    queryKey: ["data"],
    queryFn: fetchData,
  })
}

const fetchData = async (): Promise<Photo[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos")
  return await res.json()
}

export const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  return await res.json()
}
