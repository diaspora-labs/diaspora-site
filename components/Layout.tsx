import React from "react"

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <div
      className={`
          bg-container flex 
          min-h-screen flex-col items-center
          justify-center bg-black bg-home-bg 
          bg-contain bg-center 
          bg-no-repeat 
          py-2 
          text-white`}
    >
      {children}
    </div>
  )
}
