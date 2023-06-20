import { NFTModal } from "@/components/NFTModal"
import React, { useEffect, useState } from "react"

export const VideoPlayer = () => {
  const [editionNft, setEditionNft] = useState(undefined)
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
      <iframe className="h-5/6 w-full" id="my-iframe" src="http://localhost:19006/"></iframe>

      {showModal && nft && <NFTModal nft={nft} setModal={setShowModal} />}
    </div>
  )
}
