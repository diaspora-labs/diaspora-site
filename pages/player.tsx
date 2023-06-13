import React, { useEffect } from "react"
import { Layout } from "../components/Layout"

const Player = () => {
  useEffect(() => {
    window.addEventListener("message", handleMessage)
    window.parent.postMessage(
      {
        type: "itemKey",
        data: { hello: "world" },
      },
      "*"
      // "https://journey-taupe.vercel.app"
    )
  }, [])

  const handleMessage = (event) => {
    if (event.data.type === "itemKey") {
      console.log("Received message data from iFrame: ", event.data.data)
      // Here is where we call our NFT FUNCTION
      // someFunction(event.data.data)
    }
  }

  return (
    <Layout>
      <div className="max-smm-[18vh] relative flex h-screen flex-col items-center justify-center max-2xl:h-[90vh] max-xl:h-[75vh] max-lg:h-[40vh] max-md:h-[40vh] max-sm:h-[35vh]">
        <iframe className="h-5/6 w-full" id="my-iframe" src="https://journey-taupe.vercel.app"></iframe>
      </div>
    </Layout>
  )
}

export default Player
