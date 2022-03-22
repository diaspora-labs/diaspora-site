import React from "react"
import Link from "next/link"

export const Nav = () => {
  return (
    <div className="text-right">
      <div className="p-2">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className="p-2">
        <Link href="/team">
          <a>Team</a>
        </Link>
      </div>
      <div className="p-2">
        <Link href="/about">
          <a>White Paper</a>
        </Link>
      </div>
    </div>
  )
}
