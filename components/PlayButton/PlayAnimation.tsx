import React from "react"
import Lottie, { Options } from "react-lottie"

import animationData from "./animation.json"
import { PlayState } from "./PlayButton"

interface PlayAnimationProps {
  animate: boolean
}

export const PlayAnimation: React.FC<PlayAnimationProps> = ({ animate }) => {
  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: animationData,
      }}
      isStopped={!animate}
      width="18px"
      height="auto"
    />
  )
}
