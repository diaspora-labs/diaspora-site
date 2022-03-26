import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export const Nav = () => {
  const router = useRouter()

  return (
    <div className="text-right">
      <div className="bg-black p-2">
        <Link href="/">
          <a className={router.pathname == "/" ? "text-indigo-600" : ""}>Home</a>
        </Link>
      </div>
      <div className="bg-black p-2">
        <Link href="/team">
          <a className={router.pathname == "/team" ? "text-indigo-600" : ""}>Team</a>
        </Link>
      </div>
      <div className="bg-black p-2">
        <Link href="/whitepaper">
          <a className={router.pathname == "/whitepaper" ? "text-indigo-600" : ""}>White Paper</a>
        </Link>
      </div>
    </div>
  )
}
