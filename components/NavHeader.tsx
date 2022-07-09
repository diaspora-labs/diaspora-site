import React, { useState, useEffect } from "react"
import { DiasporaLogoSmall } from "../components/DiasporaLogoSmall"
import Link from "next/link"
import { Nav } from "./Nav"
import { Discord } from "./Icons/Discord"
import { Instagram } from "./Icons/Instagram"
import { Twitter } from "./Icons/Twitter"

export const NavHeader = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  return (
    <nav className="w-full">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center py-4 px-4">
          <Link href="/">
            <a>
              <DiasporaLogoSmall width="120" />
            </a>
          </Link>
        </div>

        <div className="grow"></div>

        <div className="mx-4 flex items-center">
          {width > 800 && <Nav />}
          <span className="ml-10 flex flex-row items-center space-x-12">
            <Discord color="rgba(255,255,255,0.5)" />
            <Instagram color="rgba(255,255,255,0.5)" />
            <Twitter color="rgba(255,255,255,0.5)" />
          </span>
        </div>
      </div>
      {width <= 800 && (
        <div className="flex justify-center">
          <Nav />
        </div>
      )}
    </nav>
  )
}
