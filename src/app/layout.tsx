import "@/styles/globals.css"

import { GeistSans } from "geist/font/sans"
import { HomeIcon } from "lucide-react"
import { type Metadata } from "next"
import Link from "next/link"
import { Providers } from "./providers"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "React Query Guide",
  description: "React Query v5 guide with realworld examples",
  icons: [{ rel: "icon", url: "/favicon.ico" }]
}

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Providers>{children}</Providers>
        <Toaster richColors position="bottom-right" />
        <HomeHelper />
      </body>
    </html>
  )
}

const HomeHelper = () => (
  <Link
    href="/"
    className="flex justify-center items-center size-11 rounded-full fixed top-8 left-8"
  >
    <HomeIcon />
    {/* <div className="pointer-events-none absolute left-[70%] top-[20%] h-20 w-20 rounded-full  opacity-80 blur-2xl bg-white lg:left-[60%] lg:top-[30%] lg:size-60 2xl:left-[73%] 2xl:top-[40%] 2xl:size-80" /> */}
    <div className="pointer-events-none absolute left-[-24%] top-[-29%] size-40 rounded-full opacity-80 blur-2xl bg-background" />
  </Link>
)
