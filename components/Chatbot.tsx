import React, { useState } from "react"
import Script from "next/script"

declare var Landbot: any

const Chatbot = () => {
  const [landbot, setLandbot] = useState(null)

  function initLandbot() {
    var s = document.createElement("script")
    s.type = "text/javascript"
    s.async = true
    s.addEventListener("load", function () {
      const l = new Landbot.Popup({
        configUrl: "https://chats.landbot.io/v3/H-1228722-I7RHH311Y3TAH6H3/index.json",
        launcher_image: null,
        launcherOptions: {
          enable: false,
        },
      })
      setLandbot(l)
    })
    s.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js"
    var x = document.getElementsByTagName("script")[0]
    if (x.parentNode && typeof x.parentNode === "object") {
      x.parentNode.insertBefore(s, x)
    }
  }

  return (
    <>
      <Script
        src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.js"
        strategy="lazyOnload"
        onLoad={() => initLandbot()}
      ></Script>
    </>
  )
}

export default Chatbot
