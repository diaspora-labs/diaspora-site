import React from "react"
import { Play } from "../Icons/Play"
import { Stop } from "../Icons/Stop"
import { PlayAnimation } from "./PlayAnimation"

export enum PlayState {
  Play,
  Stop,
  Pause,
}

interface PlayButtonProps {
  state: PlayState
  onClick: () => void
}

export const PlayButton: React.FC<PlayButtonProps> = ({ state, onClick }) => {
  return (
    <div className="flex items-center p-3" onClick={onClick}>
      <div className="block cursor-pointer">{state === PlayState.Play ? <Stop /> : <Play />}</div>
    </div>
  )
}
