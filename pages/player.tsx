import React, { useEffect } from "react"
import { Layout } from "../components/Layout"

const Player = () => {
  useEffect(() => {
    window.addEventListener("message", handleMessage)
    window.parent.postMessage(
      {
        type: "itemKey",
        data: {
          fun1: () => {
            console.log("Testing")
          },
        },
      },
      "https://journey-taupe.vercel.app"
    )
    // const iframe = document.getElementById("my-iframe")
    // iframe.contentWindow.postMessage(
    //   { type: "myFunction", data: { randomData: "Testing" } },
    //   "https://journey-taupe.vercel.app"
    // )
  }, [])

  function handleMessage(event) {
    if (event.data.type === "itemKey") {
      console.log("Received message data from iFrame: ", event.data.data)
      // Here is where we call our NFT FUNCTION
      // someFunction(event.data.data)
    }
  }

  return (
    <Layout>
      <div className="flex h-screen w-screen items-center justify-center">
        <iframe className="h-full w-full" id="my-iframe" src="https://journey-taupe.vercel.app"></iframe>
      </div>
    </Layout>
  )
}

export default Player
