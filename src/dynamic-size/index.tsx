import { useSuspenseQuery } from "@tanstack/react-query"
import { useWindowVirtualizer } from "@tanstack/react-virtual"
import { createDataQueryOptions } from "../queries/query"
import { Card } from "../components/card"
import { Link } from "react-router"

const COLUMNS = 4

function DynamicSize() {
  const { data } = useSuspenseQuery(createDataQueryOptions())

  const rowCount = Math.ceil(data.length / COLUMNS)

  const virtualizer = useWindowVirtualizer({
    count: rowCount,
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
              const startIndex = index * COLUMNS
              const rowCards = data.slice(startIndex, startIndex + COLUMNS)

              return (
                <div
                  className="grid gap-4 my-6"
                  key={key}
                  data-index={index}
                  ref={virtualizer.measureElement}
                  style={{
                    gridTemplateColumns: `repeat(${COLUMNS},minmax(0,1fr))`,
                  }}
                >
                  {rowCards.map((card, cardIndex) => (
                    <Card key={startIndex + cardIndex} data={card} />
                  ))}
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
