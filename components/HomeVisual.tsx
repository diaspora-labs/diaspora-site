import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import lottie from "lottie-web"

// animation data
import animation from "../data/DiasporaVisual.json"

export const Visual = () => {
  // load animation
  useEffect(() => {
    var animDuration = 600
    const anim = lottie.loadAnimation({
      container: document.querySelector("#roadmap-animation") as HTMLElement,
      animationData: animation,
      renderer: "svg",
      loop: false,
      autoplay: false,
    })

    function animatebodymovin(duration: number) {
      const scrollPosition = window.scrollY - 270
      const maxFrames = anim.totalFrames
      const frame = (maxFrames / 140) * (scrollPosition / (duration / 100))
      if (frame <= maxFrames) {
        anim.goToAndStop(frame, true)
      }
    }

    const onScroll = () => {
      animatebodymovin(animDuration)
    }

    document.addEventListener("scroll", onScroll)

    return () => {
      anim.destroy()
    }
  }, [])

  return <div id="roadmap-animation" className="mx-auto w-1/2" />
}
