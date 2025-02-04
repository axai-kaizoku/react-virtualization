import { useSuspenseQuery } from "@tanstack/react-query"
import { useWindowVirtualizer } from "@tanstack/react-virtual"
import { createDataQueryOptions } from "../queries/query"
import { Card } from "../components/card"
import { Link } from "react-router"

function DynamicSize() {
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
          <div
            className="absolute top-0 left-0 w-full"
            style={{
              transform: `translateY(${virtualItems?.[0]?.start ?? 0}px)`,
            }}
          >
            {virtualItems.map(({ index, key }) => {
              const card = data[index]
              return (
                <div
                  className="my-6"
                  key={key}
                  data-index={index}
                  ref={virtualizer.measureElement}
                >
                  <Card data={card} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default DynamicSize
