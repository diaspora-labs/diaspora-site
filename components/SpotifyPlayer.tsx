import React, { useEffect, useState } from "react"

const AccessToken =
  "BQAzNwHtVVF-2JS5_ByOdAMzp8wfvfBT2rVbWujDtHXJHipAeWmRnUKoFd6cnNZKCfrMC7BIJkcqEQ_FDjjHfO5vgGEvekaexJxgMxzpTEnRqP5DT2gn2Q3LY5bfsP8ALPtkRZW40VVbeiNHfEnNeRh3YdjxYvroKKqnNTbP00bSlNyJDuCMTPiFe93aR5SLXEY"

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

      player.addListener("initialization_error", ({ message }) => {
        console.error(message)
      })

      player.addListener("authentication_error", ({ message }) => {
        console.error(message)
      })

      player.addListener("account_error", ({ message }) => {
        console.error(message)
      })

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
    if (deviceId) {
      const play = ({
        spotify_uri,
        playerInstance: {
          _options: { getOAuthToken },
        },
      }) => {
        getOAuthToken((access_token) => {
          fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
            method: "PUT",
            body: JSON.stringify({ uris: [spotify_uri] }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`,
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
