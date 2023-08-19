import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

import "./globals.css"

export const metadata: Metadata = {
  title: "Unknown Co.",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
}

type RootLayoutProps = {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="py-48" id="root">
          {children}
        </div>
      </body>
    </html>
  )
}
