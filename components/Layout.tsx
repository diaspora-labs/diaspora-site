import React from "react"
import Link from "next/link"
import { DiasporaLogoSmall } from "../components/DiasporaLogoSmall"
import cls from "classnames"
import { Nav } from "../components/Nav"

export const Layout: React.FC<any> = ({ children, classes, showLogo = true }) => {
  return (
    <div className={cls(`flex min-h-screen flex-col bg-black text-white`, classes)}>
      {/*<div class="flex justify-between">
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

      <nav class="bg-inherit">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-7">
            
              <div>
                <a href="#" class="flex items-center py-4 px-2">
                  {showLogo && (
                    <Link href="/">
                      <a>
                        <DiasporaLogoSmall />
                      </a>
                    </Link>
                  )}
                </a>
              </div>

              <Nav />
            </div>
          </div>
        </div>
      </nav>

      {children}
    </div>
  )
}


