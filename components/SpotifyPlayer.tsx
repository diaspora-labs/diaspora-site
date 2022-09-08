import React from "react";

export const ReactPlayer = () => {
    return(
    <div id="embed-iframe"></div>
        <script src="https://open.spotify.com/embed-podcast/iframe-api/v1" async>
        </script>
        <script type="text/javascript">
        window.onSpotifyIframeApiReady = (IFrameAPI) => {
            let element = document.getElementById('embed-iframe');
            let options = {
                width: '60%',
                height: '200',
                uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
            };
            let callback = (EmbedController) => {
            document.querySelectorAll('ul#episodes > li > button').forEach(
                episode => {
                episode.addEventListener('click', () => {
                    EmbedController.loadUri(episode.dataset.spotifyId)
                });
                })
            };
            IFrameAPI.createController(element, options, callback);
        };
        </script>
    )
}
