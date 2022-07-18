import React from "react"
import { Discord } from "../Icons/Discord"
import { Instagram } from "../Icons/Instagram"
import { Twitter } from "../Icons/Twitter"
import cls from "classnames"

interface HomeFooterProps {
  fixed?: boolean
}

export const HomeFooter: React.FC<HomeFooterProps> = ({ fixed }) => {
  return (
    <footer
      className={cls(
        "flex-col border-t-[1px] border-neutral-800  p-4 py-10 md:flex md:items-center md:justify-between md:p-6 md:px-10",
        { "fixed bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md": fixed }
      )}
    >
      <div className="flex w-full flex-col flex-wrap justify-between lg:flex-row lg:items-center">
        <div className="flex">
          <div className="relative mb-5 w-[350px] shrink rounded-2xl rounded-r-none bg-neutral-800 py-2 px-4 text-center">
            <input
              placeholder="Email address"
              className="absolute inset-0 bg-transparent pl-5 outline-none md:text-left"
            />
          </div>
          <div className="mb-5 rounded-2xl	 rounded-l-none bg-purple-light py-2 px-4 text-center transition ease-in-out hover:bg-opacity-80">
            <button className="m-auto">Add me to the list</button>
          </div>
        </div>

        <div className="mt-10 items-center space-x-8 md:mt-0 md:flex">
          <div className="mb-5 flex flex-row items-center justify-center space-x-10 text-sm font-light text-neutral-500 md:mb-0">
            <div className=" ">
              <a href="/contact-us">Contact us</a>
            </div>
            <div className=" ">
              <a href="/terms">Terms and conditions</a>
            </div>
          </div>
          <div className="mb-5 hidden md:mb-0 md:flex">
            <span className="flex flex-row justify-center space-x-12">
              <Discord color="rgba(255,255,255,0.5)" />
              <Instagram color="rgba(255,255,255,0.5)" />
              <Twitter color="rgba(255,255,255,0.5)" />
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-row justify-center text-xs font-medium text-neutral-500 md:flex md:w-full md:justify-start">
        &copy; 2022 DIASPORA
      </div>
    </footer>
  )
}
