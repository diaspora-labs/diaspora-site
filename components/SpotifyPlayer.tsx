import React, { useEffect, useState } from "react"

const AccessToken =
  "BQA9k8hNppvgMTOJZvOUJGgXk9_lrBRTmSIuUKckXXDTBSukl9_oVbt451hCs8ZeTMuqwDNvnOx6x4ypynioSMjezlBynrNhFapEAs9NbF--ct3_0yk"

export const SpotifyPlayer = () => {
  const [player, setPlayer] = useState<any>(null)
  const [deviceId, setDeviceId] = useState<any>("")
  useEffect(() => {
    // ;(window as any).onSpotifyIframeApiReady = (IFrameAPI: any) => {
    //   let element = document.getElementById("embed-iframe")
    //   let options = {
    //     width: "60%",
    //     height: "200",
    //     uri: "spotify:playlist:3byvJcO0IZvAcaezEOnXxI",
    //   }
    //   let callback = (EmbedController: any) => {
    //     console.log(EmbedController)
    //   }
    //   IFrameAPI.createController(element, options, callback)
    // }
    ;(window as any).onSpotifyWebPlaybackSDKReady = () => {
      const token = AccessToken
      // @ts-ignore
      const player = new Spotify.Player({
        name: "Web Playback Diaspora",
        getOAuthToken: (cb: any) => {
          cb(token)
        },
        volume: 0.5,
      })

      // player.addListener("initialization_error", ({ message }) => {
      //   console.error(message)
      // })

      // player.addListener("authentication_error", ({ message }) => {
      //   console.error(message)
      // })

      // player.addListener("account_error", ({ message }) => {
      //   console.error(message)
      // })

      player
        .connect()
        .then((success) => {
          if (success) {
            console.log("The Web Playback SDK successfully connected to Spotify!")
          }
        })
        .catch((error) => {
          console.error(error)
        })
      //   const spotify_uri = "spotify:playlist:3byvJcO0IZvAcaezEOnXxI"

      player.addListener("ready", ({ device_id }) => {
        console.log("The Web Playback SDK is ready to play music!")
        console.log("Device ID", device_id)

        setDeviceId(device_id)
      })

      setPlayer(player)
    }
  })

  useEffect(() => {
    const token = AccessToken
    if (deviceId) {
      const play = ({
        spotify_uri,
        playerInstance: {
          _options: { getOAuthToken },
        },
      }) => {
        getOAuthToken((token) => {
          fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
            method: "PUT",
            body: JSON.stringify({ uris: [spotify_uri] }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
        })
      }

      play({
        playerInstance: player,
        spotify_uri: "spotify:playlist:3byvJcO0IZvAcaezEOnXxI",
      })
    }
  }, [deviceId])

  return (
    <>
      <div id="embed-iframe"></div>
      {/* <script src="https://open.spotify.com/embed-legacy/iframe-api/v1" async></script> */}
      <script src="https://sdk.scdn.co/spotify-player.js"></script>
      <button
        onClick={() => {
          player?.togglePlay()
        }}
      >
        Toggle Play
      </button>
    </>
  )
}
