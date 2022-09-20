import React, { useState, useEffect } from "react"
import { DiasporaLogoSmall } from "../components/DiasporaLogoSmall";
import { DiasporaLogo } from "./DiasporaLogo";
import Link from "next/link"
import { Nav } from "./Nav"
import { Discord } from "./Icons/Discord"
import { Instagram } from "./Icons/Instagram"
import { Twitter } from "./Icons/Twitter"

export const NavHeader = () => {
  return (
    <nav className="fixed z-50 w-full bg-black/30 backdrop-blur-md">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center py-4 px-4">
          <Link href="/">
            <a>
              <DiasporaLogo width="120" />
            </a>
          </Link>
        </div>

        <div className="grow"></div>

        <div className="mx-4 flex items-center">
          <div className="hidden md:visible">
            <Nav />
          </div>
          
          <span className="ml-10 flex flex-row items-center space-x-8">
            {/* <Discord color="rgba(255,255,255,0.5)" /> */}
            <a href="https://www.instagram.com/diasporaxyz/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
              <Instagram color="rgba(255,255,255,0.5)" />
            </a>
            <a href="https://twitter.com/OurDiaspora" target="_blank" rel="noreferrer">
              <Twitter color="rgba(255,255,255,0.5)" />
            </a>
          </span>
        </div>
      </div>

      <div className="justify-center md:hidden">
        <Nav />
      </div>
    </nav>
  )
}
