import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export const Nav = () => {
  const router = useRouter()

  return (
    <div className="items-center space-x-1 flex">
      <div className="p-4">
        <Link href="/team">
          <a className={router.pathname == "/team" ? "koro text-indigo-600" : ""}>GALLERY</a>
        </Link>
      </div>
      <div className="p-4">
        <Link href="/roadmap">
          <a className={router.pathname == "/roadmap" ? "koro text-indigo-600" : ""}>ROADMAP</a>
        </Link>
      </div>
      <div className="p-4">
        <Link href="/whitepaper">
          <a className={router.pathname == "/whitepaper" ? "koro text-indigo-600" : ""}>ABOUT</a>
        </Link>
      </div>
    </div>
  )
}
