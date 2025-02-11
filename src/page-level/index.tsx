import { useSuspenseQuery } from "@tanstack/react-query"
import { useWindowVirtualizer } from "@tanstack/react-virtual"
import { createDataQueryOptions } from "../queries/query"
import { Card } from "../components/card"
import { Link } from "react-router"

function PageLevel() {
  const { data } = useSuspenseQuery(createDataQueryOptions())

  const virtualizer = useWindowVirtualizer({
    count: data.length,
    estimateSize: () => 100,
  })

  const virtualItems = virtualizer.getVirtualItems()

  return (
    <>
      <Link to="/" className="my-4 text-blue-400">
        Home
      </Link>
      <div className="w-[90dvw] overflow-auto">
        <div
          className="relative"
          style={{ height: `${virtualizer.getTotalSize()}px` }}
        >
          {virtualItems.map(({ index, size, start, key }) => {
            const card = data[index]
            return (
              <div
                className="absolute top-0 left-0 w-full"
                style={{
                  // transform: `translateX(${start}px)`, // for horizontal virtualization
                  transform: `translateY(${start}px)`,
                  height: `${size}px`,
                }}
                key={key}
                data-index={index}
              >
                <Card data={card} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PageLevel
