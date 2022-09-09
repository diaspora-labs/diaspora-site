import { useState } from "react"
import ReactPlayer from "react-player"

export const MusicPlayer = () => {
  const [play, setPlay] = useState(true)
  const playlist = "https://www.youtube.com/playlist?list=PLZVVq-xf_m0kjiDeDSm2sW2dML4-LlrU7"

  return (
    <div>
      <ReactPlayer url={playlist} playing={play} height={0} width={1} />

      <button onClick={() => setPlay(!play)}>Play</button>
    </div>
  )
}
