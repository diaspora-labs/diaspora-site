import { NFTModal } from "@/components/NFTModal"
import React, { useEffect, useState } from "react"

export const VideoPlayer = () => {
  // allow full screen
  useEffect(() => {
    const video = document.querySelector(".video")
    if (video) {
      video.addEventListener("click", () => {
        if (video.requestFullscreen) {
          video.requestFullscreen()
        }
      })
    }
  }, [])

  const [nft, setNft] = useState(undefined)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    window.addEventListener("message", handleMessage)
    window.document.addEventListener("Journey:PlayerRendered", handleMessage)
  }, [])

  const handleMessage = (event) => {
    const eventName = event.data.event
    if (eventName && eventName.includes("Journey:")) {
      console.log("Event", event)
      if (eventName === "Journey:NftSelected") {
        setNft(event.data.data.nft)
        setShowModal(true)
      }
    }
  }

  return (
    <div className="max-smm-[18vh] relative flex h-screen flex-col items-center justify-center max-2xl:h-[90vh] max-xl:h-[75vh] max-lg:h-[40vh] max-md:h-[40vh] max-sm:h-[35vh]">
      <iframe className=" video h-5/6 w-full" src="https://web-build-five-woad.vercel.app/" ></iframe>

      {showModal && nft && <NFTModal nft={nft} setModal={setShowModal} />}
    </div>
  )
}
