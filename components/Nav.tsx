import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export const Nav = () => {
  const router = useRouter()

  return (
    <div className="text-right">
      <div className="p-2">
        <Link href="/">
          <a className={router.pathname == "/" ? "text-indigo-600" : ""}>Home</a>
        </Link>
      </div>
      <div className="p-2">
        <Link href="/team">
          <a className={router.pathname == "/team" ? "text-indigo-600" : ""}>Team</a>
        </Link>
      </div>
      <div className="p-2">
        <Link href="/about">
          <a className={router.pathname == "/white-paper" ? "text-indigo-600" : ""}>White Paper</a>
        </Link>
      </div>
    </div>
  )
}
