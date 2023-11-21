import React, { useState } from "react"
import { DiasporaLogo } from "./DiasporaLogo"
import Link from "next/link"
import { Nav } from "./Nav"

export const NavHeader = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <nav className="fixed z-50 w-full bg-transparent backdrop-blur-md top-[20px]">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-1 items-center justify-between px-4 py-2 md:py-4">
          <Link href="/">
            <a>
              <DiasporaLogo width="120" />
            </a>
          </Link>
          <div className="md:hidden">
            <button
              className="rounded-md border border-neutral-800 p-2 text-neutral-400 outline-none focus:border-neutral-500"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`hidden justify-center md:mr-4 md:block`}>
          <Nav />
        </div>
      </div>

      <div className={`block md:hidden`}>
        <Nav mobile show={navbar} />
      </div>
    </nav>
  )
}
