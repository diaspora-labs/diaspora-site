import React from "react"
import { Discord } from "../Icons/Discord"
import { Instagram } from "../Icons/Instagram"
import { Twitter } from "../Icons/Twitter"

export const HomeFooter = () => {
  return (
    <footer className="flex-col border-t-[1px] border-neutral-800  p-4 py-10 md:flex md:items-center md:justify-between md:p-6 md:px-10">
      <div className="w-full flex-row flex-wrap justify-between md:flex md:justify-between">
        <div className="md:flex">
          <div className="mb-5 shrink rounded-2xl bg-neutral-800 py-2 px-4 text-center md:rounded-r-none">
            <input placeholder="Email address" className=" bg-transparent text-center md:text-left" />
          </div>
          <div className="mb-5 rounded-2xl	 bg-purple-light py-2 px-4 text-center md:rounded-l-none">
            <button className="m-auto">Add me to the list</button>
          </div>
        </div>

        <div className="mt-10 items-center space-x-10 md:mt-0 md:flex">
          <div className="mb-5 flex flex-row items-center justify-center space-x-10 text-sm font-light text-neutral-500 md:mb-0">
            <div className=" ">
              <a href="/contact-us">Contact us</a>
            </div>
            <div className=" ">
              <a href="/terms">Terms and conditions</a>
            </div>
          </div>
          <div className="mb-5 md:mb-0 md:flex">
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
