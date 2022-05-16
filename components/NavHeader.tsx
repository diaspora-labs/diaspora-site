import React from "React"
import { DiasporaLogoSmall } from "../components/DiasporaLogoSmall"
import Link from "next/link"
import { Nav } from "./Nav"

export const NavHeader = () => {
  return (
    <nav className="w-full">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center py-4 px-2">
          <Link href="/">
            <a>
              <DiasporaLogoSmall width="120" />
            </a>
          </Link>
        </div>

        <div className="grow"></div>

        <div className="mx-4">
          <Nav />
        </div>
      </div>
    </nav>
  )
}
