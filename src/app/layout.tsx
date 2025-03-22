import "@/styles/globals.css"

import { GeistSans } from "geist/font/sans"
import { HomeIcon } from "lucide-react"
import { type Metadata } from "next"
import Link from "next/link"

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
        {children}
        <HomeHelper />
      </body>
    </html>
  )
}

const HomeHelper = () => (
  <Link
    href="/"
    className="flex justify-center items-center size-11 rounded-full bg-neutral-200 text-neutral-900 fixed bottom-12 left-12"
  >
    <HomeIcon />
  </Link>
)
