import React from "react"
import cls from "classnames"
import { NavHeader } from "./NavHeader"
import { Nav } from "./Nav"
import { MusicPlayer } from "../components/MusicPlayer"
import { playlist } from "../data/playlist"
import Chatbot from "../components/Chatbot"
import { useRouter } from "next/router"

export const Layout: React.FC<any> = ({ children, classes, showLogo = true }) => {
  const router = useRouter()
  const hidePlayer = ["/player", "/mint"].includes(router.pathname)

  return (
    <div
      className={cls(
        `bg-container max-w-screen min-h-screen flex-col overflow-hidden bg-black 
       text-white`,
        classes
      )}
    >
      <NavHeader />
      <Chatbot />
      {!hidePlayer && <MusicPlayer playlist={playlist} fixed />}
      <div className="mt-20 md:mt-10">{children}</div>
    </div>
  )
}
