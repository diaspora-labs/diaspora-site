import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import lottie from "lottie-web"

// animation data
import animation from "../data/DiasporaVisual.json"

export const Visual = () => {
  // load animation
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.querySelector("#roadmap-animation") as HTMLElement,
      animationData: animation,
      renderer: "svg",
      loop: true,
      autoplay: true,
    })

    return () => {
      anim.destroy()
    }
  }, [])

  return <div id="roadmap-animation" className="w-1/2" />
}
