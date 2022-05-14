import React from "react"
import Lottie from "react-lottie"

import { animationData } from "./animationData"

export const DiasporaLogo = () => {
  const params = {
    renderer: "svg",
    loop: false,
    autoplay: true,
    animationData: animationData,
  }

  return <Lottie options={params} width="100%" height="auto" />
}

export const DiasporaGoldMask = () => {
  const params = {
    renderer: "svg",
    loop: false,
    autoplay: true,
    animationData: animationData,
  }

  return <Lottie options={params} width="100%" height="auto" />
}
