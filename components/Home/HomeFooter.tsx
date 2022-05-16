import React from "react"

export const HomeFooter = () => {
  return (
    <div className="flex w-full flex-row justify-between border-t-[1px] border-neutral-800 py-10 px-10">
      <div className="flex">
        <div className="shrink rounded-tl-lg rounded-bl-lg bg-neutral-800 py-2 px-4">
          <input placeholder="Email address" className="bg-transparent pr-10" />
        </div>
        <div className="rounded-tr-lg rounded-br-lg bg-purple-light py-2 px-4">
          <button>Add me to the list</button>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-row items-center justify-center space-x-10 text-neutral-500">
          <div className=" ">
            <a href="/contact-us">Contact us</a>
          </div>
          <div className=" ">
            <a href="/terms">Terms and conditions</a>
          </div>
        </div>
      </div>
    </div>
  )
}
