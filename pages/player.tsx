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
      <section className="relative h-screen flex flex-col justify-center items-center max-2xl:h-[90vh] max-xl:h-[75vh] max-lg:h-[40vh] max-md:h-[40vh] max-sm:h-[35vh] max-smm-[18vh]">
        <iframe className="w-full h-5/6" id="my-iframe" src="https://journey-taupe.vercel.app"></iframe>
      </section>
    </Layout>
  )
}

export default Player
