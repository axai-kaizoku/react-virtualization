import React, { SetStateAction, useState } from "react"
import { cn } from "../lib/utils"

export default function Tailwindv4() {
  const [foo, setFoo] = useState(false)
  return (
    <div
      className={cn(
        "h-full w-full cursor-grab bg-amber-50",
        "[--header-height:8rem] [--sidebar-width:12rem]",
        !foo && "bg-neutral-800"
      )}
    >
      <Header />
      <Sidebar />
      <div className="ml-[var(--sidebar-width)] mt-[var(--header-height)] border-4 border-slate-200 w-[calc(100dvw-var(--sidebar-width))] h-[calc(100dvh-var(--header-height))] flex justify-center items-center flex-col gap-y-8">
        <TwMerge foo={foo} setFoo={setFoo} />
        <TwVariables />
      </div>
    </div>
  )
}

const Header = () => (
  <header className="fixed top-0 w-full h-[var(--header-height)] z-10 bg-orange-400"></header>
)

const Sidebar = () => (
  <div className="fixed left-0 top-0 h-full w-[var(--sidebar-width)] bg-green-400"></div>
)

const TwMerge = ({
  foo,
  setFoo,
}: {
  foo: boolean
  setFoo: React.Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 ">
      <h1>Merging classNames</h1>
      <span
        className={cn(
          "rounded-md text-black p-4 [width:20rem] bg-green-200",
          foo && "bg-red-200"
        )}
      >
        Tailwindv4
      </span>
      <button
        className="px-2 py-1 font-mono text-sm rounded-4xl cursor-pointer bg-blue-200 text-black"
        onClick={() => setFoo((prev) => !prev)}
      >
        toggle
      </button>
    </div>
  )
}

const TwVariables = () => (
  <div className="[--container-gap:5px] lg:[--container-gap:20px] 2xl:[--container-gap:35px] hover:[--container-gap:50px]">
    <h1>Tailwind variables</h1>
    <br />
    <div className="flex justify-center gap-[var(--container-gap)] p-4 w-96 bg-green-200">
      {Array(5)
        .fill("asd")
        .map((_, i) => (
          <div key={i} className="size-12 bg-red-500 rounded-md" />
        ))}
    </div>
  </div>
)
