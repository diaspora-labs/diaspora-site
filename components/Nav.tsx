import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import cls from "classnames"
import { Discord } from "./Icons/Discord"
import { Instagram } from "./Icons/Instagram"
import { Twitter } from "./Icons/Twitter"

const routes: { [route: string]: string } = {
  "/": "home",
  // "/gallery": "gallery",
  "/mint": "mask pass",
  "/roadmap": "roadmap",
  "/whitepaper": "whitepaper",
}

export const Nav = ({ show = true, mobile }: { show?: boolean; mobile?: boolean }) => {
  const router = useRouter()

  const baseClasses = "transition ease-in-out hover:text-purple-nav uppercase"
  const iconColor = `rgba(255, 255, 255, ${mobile ? "1" : "0.5"})`

  return (
    <div
      className={cls(
        `flex items-center justify-center overflow-hidden transition-all duration-300 md:w-auto md:flex-row ${
          show ? `h-auto opacity-100` : "h-0 opacity-0"
        } ${mobile ? "mt-2 w-full flex-col" : ""}`
      )}
    >
      {Object.keys(routes).map((route, i) => (
        <div
          className={cls("mx-1 p-4", {
            "w-full border-b-[1px] border-neutral-800 first:border-t-[1px]": mobile,
          })}
          key={`route-${i}`}
        >
          <Link href={route}>
            <a className={cls(baseClasses, router.pathname == route ? "koro text-purple-nav" : "")}>{routes[route]}</a>
          </Link>
        </div>
      ))}
      <span
        className={cls("flex flex-row items-center space-x-8 pl-10 pr-4 ", {
          " w-full justify-center border-b-[1px] border-neutral-800 py-6": mobile,
        })}
      >
        <Discord color={iconColor} />
        <a href="https://www.instagram.com/diasporaxyz/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
          <Instagram color={iconColor} />
        </a>
        <a href="https://twitter.com/OurDiaspora" target="_blank" rel="noreferrer">
          <Twitter color={iconColor} />
        </a>
      </span>
    </div>
  )
}
