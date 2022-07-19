import React from "react"

export const EmailInput = () => {
  return (
    <div className="flex h-16 ">
      <div className="relative mb-5 w-2/3 shrink rounded-2xl rounded-r-none bg-neutral-800 py-2 px-4 text-center lg:w-[350px]">
        <input placeholder="Email address" className="absolute inset-0 bg-transparent pl-5 outline-none md:text-left" />
      </div>
      <div className="mb-5 w-1/3	rounded-2xl rounded-l-none bg-purple-light py-2 px-4 text-center transition ease-in-out hover:bg-opacity-80">
        <button className="m-auto">Add me to the list</button>
      </div>
    </div>
  )
}
