import { useSuspenseQuery } from "@tanstack/react-query"
import { useVirtualizer } from "@tanstack/react-virtual"
import { useRef } from "react"
import { createDataQueryOptions } from "../queries/query"
import { Card } from "../components/card"

function PageLevel() {
  const { data } = useSuspenseQuery(createDataQueryOptions())
  const scrollRef = useRef<HTMLDivElement>(null)

  const virtualizer = useVirtualizer({
    count: data.length,
    estimateSize: () => 100,
    getScrollElement: () => scrollRef.current,
    // horizontal: true
  })

  const virtualItems = virtualizer.getVirtualItems()

  return (
    <>
      <a href="/" className="my-4 text-blue-400">
        Home
      </a>
      <div
        className="space-y-3 py-3 h-[90dvh] w-[90dvh] overflow-auto"
        ref={scrollRef}
      >
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
