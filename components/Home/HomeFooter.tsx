import React from "react"

export const HomeFooter = () => {
  return (
    <div className="w-full border-t-[1px] border-neutral-800 py-10 px-10">
      <div className="flex">
        <div className="shrink rounded-tl-lg rounded-bl-lg bg-neutral-800 py-2 px-4">
          <input placeholder="Email address" className="bg-transparent pr-10" />
        </div>
        <div className="rounded-tr-lg rounded-br-lg bg-purple-light py-2 px-4">
          <button>Add me to the list</button>
        </div>
      </div>
    </div>
  )
}
