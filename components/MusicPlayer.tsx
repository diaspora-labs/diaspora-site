import { useState, useEffect } from "react"
import ReactPlayer from "react-player"

export const MusicPlayer = () => {
  const [play, setPlay] = useState(true)
  const [hasWindow, setHasWindow] = useState(false);
  const playlist = "https://www.youtube.com/playlist?list=PLZVVq-xf_m0kjiDeDSm2sW2dML4-LlrU7"

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div>
      {hasWindow && <ReactPlayer url={playlist} playing={play} height={100} width={100} />}

      
      <button onClick={() => setPlay(!play)}>Play</button>
    </div>
  )
}
