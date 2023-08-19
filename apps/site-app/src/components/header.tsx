"use client"

import { List as ListIcon } from "@phosphor-icons/react"
import Link from "next/link"
import { useRef } from "react"

export function Header() {
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenuVisibility = () => {
    if (!menuRef.current) return

    const isOpen = menuRef.current.dataset.state === "open"
    menuRef.current.dataset.state = isOpen ? "closed" : "open"
  }

  const links = [
    { href: "/", label: "Home" },
    { href: "/", label: "About" },
    { href: "/", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between px-16 py-8 backdrop-blur xl:container md:px-32 lg:px-48 xl:mx-auto xl:px-64">
      <Link href="/">
        <h1 className="flex items-center">
          <span>🐈‍⬛</span>
          <span className="font-bold">Unknown Co.</span>
        </h1>
      </Link>

      <button
        className="flex h-48 w-48 items-center justify-center md:hidden"
        onClick={toggleMenuVisibility}
        type="button"
      >
        <ListIcon size={24} weight="light" />
      </button>

      <div
        className="p-16 max-md:absolute max-md:inset-x-0 max-md:top-full max-md:w-full max-md:backdrop-blur max-md:data-closed:hidden"
        data-state="closed"
        ref={menuRef}
      >
        <nav className="flex max-md:flex-col">
          {links.map(({ href, label }, index) => (
            <Link
              className="px-16 max-md:p-8"
              onClick={toggleMenuVisibility}
              href={href}
              key={index}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
