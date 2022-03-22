import React from "react"
import { DiasporaLogoSmall } from "../components/DiasporaLogoSmall"
import cls from "classnames"

export const Layout: React.FC<any> = ({ children, classes }) => {
  return (
    <div className={cls(`flex min-h-screen flex-col bg-black text-white`, classes)}>
      <div className="p-10">
        <DiasporaLogoSmall />
      </div>
      {children}
    </div>
  )
}
