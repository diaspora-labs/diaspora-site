import React from "react"
import Link from "next/link"
import Head from "next/head"
import { DiasporaLogoSmall } from "../components/DiasporaLogoSmall"
import cls from "classnames"
import { Nav } from "../components/Nav"

export const Layout: React.FC<any> = ({ children, classes, showLogo = true }) => {
  return (
    <div className={cls(`flex min-h-screen flex-col bg-black text-white`, classes)}>
      {/*<div className="flex justify-between">
        <div className="flex space-x-7
         p-10">
          {showLogo && (
            <Link href="/">
              <a>
                <DiasporaLogoSmall />
              </a>
            </Link>
          )}
        </div>
        <div className=" top-0 right-0">
          <Nav />
        </div>

      </div>*/}

      <nav className="bg-inherit">
        <div className="mx-auto w-full px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div className="flex items-center py-4 px-2">
                {showLogo && (
                  <Link href="/">
                    <a>
                      <DiasporaLogoSmall />
                    </a>
                  </Link>
                )}
              </div>

              <div className="flex flex-grow"></div>
              <Nav />
            </div>
          </div>
        </div>
      </nav>

      {children}
    </div>
  )
}
