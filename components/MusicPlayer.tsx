import { useState } from "react"
import ReactPlayer from "react-player"

export const MusicPlayer = () => {
  const [play, setPlay] = useState(true)
  const playlist = ["https://www.youtube.com/watch?v=XzzqJb6Dsbs", "https://www.youtube.com/watch?v=OjHX7jf-znA"]

  return (
    <div>
      <ReactPlayer url={playlist} playing={play} height={0} width={1} />

      <button onClick={() => setPlay(!play)}>Play</button>
    </div>
  )
}
