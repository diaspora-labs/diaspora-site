import React from "react"
import { useForm, ValidationError } from "@formspree/react"

export const EmailInput = () => {
  const [state, handleSubmit] = useForm("xaylqzjw")

  const [buttonText, setButtonText] = React.useState("Add me to the list")
  return (
    <form
      action="https://submit-form.com/W5R57IE0"
      onSubmit={(e) => {
        e.preventDefault()
        setButtonText("Thanks for subscribing!")
      }}
    >
      <div className="flex h-16 ">
        <div className="relative mb-5 w-2/3 shrink rounded-2xl rounded-r-none bg-neutral-800 py-2 px-4 text-center lg:w-[350px]">
          <input
            id="email"
            name="email"
            placeholder="Email address"
            className="absolute inset-0 bg-transparent pl-5 outline-none md:text-left"
          />
        </div>
        <div className="mb-5 w-1/2 rounded-2xl rounded-l-none bg-purple-light py-2 px-4 text-center transition ease-in-out hover:bg-opacity-80">
          <button type="submit" className="m-auto">
            {buttonText}
          </button>
        </div>
      </div>
    </form>
  )
}
