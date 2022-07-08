import React from "react"
import { Discord } from "../Icons/Discord"
import { Instagram } from "../Icons/Instagram"
import { Twitter } from "../Icons/Twitter"

export const HomeFooter = () => {
  return (
    <footer className="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">

      <div className="md:flex flex-wrap w-full flex-row justify-center md:justify-between border-t-[1px] border-neutral-800 py-10 md:px-10">
        
        <div className="md:flex ">
          <div className="text-center rounded-2xl	 mb-5 shrink md:rounded-r-lg md:rounded-r-lg bg-neutral-800 py-2 px-4">
            <input placeholder="Email address" className=" bg-transparent text-center" />
          </div>
          <div className="text-center rounded-2xl	 mb-5 md:rounded-l-lg md:rounded-l-lg bg-purple-light py-2 px-4">
            <button className="m-auto">Add me to the list</button>
          </div>
        </div>

        <div className="md:flex  md:mt-0 mt-10">
          <div className="mb-5 flex flex-row items-center justify-center space-x-10 text-neutral-500 text-sm font-light">
            <div className=" ">
              <a href="/contact-us">Contact us</a>
            </div>
            <div className=" ">
              <a href="/terms">Terms and conditions</a>
            </div>
          </div>
        </div>

        <div className="mx-4 md:flex mb-10">
          <span className="flex flex-row  space-x-12 justify-center">
            <Discord color="rgba(255,255,255,0.5)" />
            <Instagram color="rgba(255,255,255,0.5)" />
            <Twitter color="rgba(255,255,255,0.5)" />
          </span>
        </div>

        <div className="md:flex ">
          <div className="mb-5 text-xs flex flex-row items-center justify-center space-x-10 text-neutral-500 font-medium	">
            &copy; 2022 DIASPORA
          </div>
        </div>
      
      </div>

      
    </footer>
  )
}
