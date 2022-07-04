import React from "react"
import cls from "classnames"

export const Layout: React.FC<any> = ({ children, classes, showLogo = true }) => {
  return (
    <div
      className={cls(
        `fixed bg-container min-h-screen flex-col bg-black 
        text-white`,
        classes
      )}
    >
      {children}
    </div>
  )
}
