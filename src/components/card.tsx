import { useState } from "react"
import { Photo } from "../queries/query"
import { cn } from "../lib/utils"

type Props = {
  data: Photo
}

export const Card = ({ data }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="bg-neutral-300/95 font-sans tracking-tight text-neutral-800  p-6 rounded-xl text-2xl"
      onClick={() => setOpen((prev) => !prev)}
    >
      <span className="select-none">{data.title}</span>
      <p className={cn("bg-white text-black h-48", !open && "hidden")}>
        {data.thumbnailUrl}
      </p>
    </div>
  )
}
