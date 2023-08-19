import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-purple-100">
      <div className="mx-auto flex flex-col gap-32 px-16 py-16 xl:container md:px-32 lg:px-48 lg:py-32 xl:mx-auto xl:px-64">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center">
              <span>🐈‍⬛</span>
              <span className="font-bold">Unknown Co.</span>
            </div>
            <p className="text-14 mt-4 max-w-xs text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="text-14 mt-4 flex flex-col space-y-2 text-gray-500">
                <Link className="hover:opacity-75" href="/">
                  About
                </Link>
                <Link className="hover:opacity-75" href="/">
                  Careers
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="text-14 mt-4 flex flex-col space-y-2 text-gray-500">
                <Link className="hover:opacity-75" href="/">
                  Contact
                </Link>
                <Link className="hover:opacity-75" href="/">
                  FAQs
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="text-14 mt-4 flex flex-col space-y-2 text-gray-500">
                <Link className="hover:opacity-75" href="/">
                  Privacy Policy
                </Link>
                <Link className="hover:opacity-75" href="/">
                  Terms & Conditions
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="text-xs mt-8 text-gray-800">© 2023 Unknown Co</p>
      </div>
    </footer>
  )
}
