import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

import { Footer } from "~/components/footer"
import { Header } from "~/components/header"
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
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white text-black" id="root">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
