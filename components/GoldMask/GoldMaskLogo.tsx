import { useState } from "react"
import dynamic from "next/dynamic"
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
})

export default function GoldMaskLogo() {
  const [spline, setSpline] = useState<any>()

  function onLoad() {
    setSpline(spline)
    spline?.emitEvent("mouseHover", "d8bfa08b-1e2c-4511-8f4c-f75e709396c1")
  }

  return (
    <Spline
      scene="https://prod.spline.design/QZQ39MAcUPi3F1Dl/scene.splinecode"
      onLoad={onLoad}
      className="absolute inset-0"
    />
  )
}
