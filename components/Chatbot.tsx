import React, { useEffect } from "react"
import Script from "next/script"

const Chatbot = () => {
  useEffect(() => {
    function initLandbot() {
      let myLandbot
      if (!myLandbot) {
        var s = window.document.createElement("script")
        s.type = "text/javascript"
        s.async = true
        s.addEventListener("load", function () {
          myLandbot = new Landbot.Popup({
            configUrl: "https://chats.landbot.io/v3/H-1228722-I7RHH311Y3TAH6H3/index.json",
          })
        })
        s.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js"
        var x = window.document.getElementsByTagName("script")[0]
        x.parentNode.insertBefore(s, x)
      }
    }

    window.addEventListener("mouseover", initLandbot, { once: true })
    window.addEventListener("touchstart", initLandbot, { once: true })
  })

  return <></>
}

export default Chatbot
