import React from "react"
import cls from "classnames"
import { NavHeader } from "./NavHeader"
import { Nav } from "./Nav"

export const Layout: React.FC<any> = ({ children, classes, showLogo = true }) => {
  return (
    <div
      className={cls(
        `bg-container max-w-screen min-h-screen flex-col overflow-hidden bg-black 
       text-white`,
        classes
      )}
    >
      <NavHeader />
      <div className="md:mt-10 mt-20">{children}</div>
    </div>
  )
}
