import React from "react"
import cls from "classnames"
import { EmailInput } from "../EmailInput/EmailInput"
import { FormspreeProvider } from "@formspree/react"

interface HomeFooterProps {
  fixed?: boolean
}

export const HomeFooter: React.FC<HomeFooterProps> = ({ fixed }) => {
  return (
    <footer
      className={cls(
        "flex-col border-t-[1px]  border-neutral-800 p-4 py-10 md:flex md:items-center md:justify-between md:p-6 md:px-10 md:pb-20",
        { "fixed bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md": fixed }
      )}
    >
      <div className="flex w-full flex-col flex-wrap justify-between lg:flex-row lg:items-center">
        <FormspreeProvider project={process.env.FORMSPREE_PROJECT_ID}>
          <EmailInput />
        </FormspreeProvider>

        <div className="mt-10 items-center space-x-8 md:mt-0 md:flex">
          <div className="flex flex-row justify-center text-xs font-medium text-neutral-500 md:flex md:w-full md:justify-start">
            &copy; 2022 DIASPORA
          </div>
        </div>
      </div>
    </footer>
  )
}
