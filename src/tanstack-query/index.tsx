import { useQuery } from "@tanstack/react-query"
import { getTodos } from "../queries/query"

const TanstackQuery = () => {
  const { data, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  })
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[50dvw]">
          {isPending ? (
            <>Loading..</>
          ) : (
            <>{JSON.stringify(data.slice(0, 10))}</>
          )}
        </div>
      </div>
    </>
  )
}

export default TanstackQuery
