import { useQuery } from "@tanstack/react-query"
import { getTodos } from "../queries/query"

const TanstackQuery = () => {
  const { data, isPending, refetch, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  })

  if (error) {
    alert("something went wrong!")
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
        <div className="w-[70dvw]">
          {isPending ? (
            <img src="/spinner.svg" alt="spinner" className="size-14" />
          ) : (
            <>{JSON.stringify(data.slice(0, 10))}</>
          )}
        </div>
        <button
          onClick={() => refetch()}
          className="bg-amber-50 px-2 py-1 rounded-md text-black font-mono cursor-pointer"
        >
          refetch
        </button>
      </div>
    </>
  )
}

export default TanstackQuery
