import React from "react"
import cls from "classnames"

export const Layout: React.FC<any> = ({ children, classes, showLogo = true }) => {
  return (
    <div
      className={cls(
        `bg-container max-w-screen min-h-screen flex-col overflow-hidden bg-black 
        text-white`,
        classes
      )}
    >
      {children}
    </div>
  )
}
