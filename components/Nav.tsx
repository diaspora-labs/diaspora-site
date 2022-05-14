import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export const Nav = () => {
  const router = useRouter()

  return (
    <div className="hidden md:flex items-center space-x-1">
      <div className="bg-black p-4">
          <Link href="/team">
            <a className={router.pathname == "/team" ? "text-indigo-600 koro" : ""}>GALLERY</a>
          </Link>
        </div>
        <div className="bg-black p-4">
          <Link href="/roadmap">
            <a className={router.pathname == "/roadmap" ? "text-indigo-600 koro" : ""}>ROADMAP</a>
          </Link>
        </div>
        <div className="bg-black p-4">
          <Link href="/whitepaper">
            <a className={router.pathname == "/whitepaper" ? "text-indigo-600 koro" : ""}>ABOUT</a>
          </Link>
        </div>
    </div>
  )
}