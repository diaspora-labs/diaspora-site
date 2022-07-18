import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import cls from "classnames"

export const Nav = () => {
  const router = useRouter()

  const baseClasses = "transition ease-in-out hover:text-indigo-600"
  const routes = {
    // "/gallery": "gallery",
    "/roadmap": "roadmap",
    "/whitepaper": "about",
  }

  return (
    <div className="flex items-center space-x-1">
      {Object.keys(routes).map((route, i) => (
        <div className="p-4" key={`route-${i}`}>
          <Link href={route}>
            <a className={cls(baseClasses, router.pathname == route ? "koro uppercase text-indigo-600" : "")}>
              routes[route]
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
