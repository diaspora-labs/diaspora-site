import type { NextApiRequest, NextApiResponse } from "next"
var SpotifyWebApi = require("spotify-web-api-node")

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})


// Retrieve an access token and a refresh token


spotifyApi.setAccessToken(authorizationCode);
// When our access token will expire
let tokenExpirationEpoch

// spotifyApi.clientCredentialsGrant().then(
//   function(data: { body: { [x: string]: any; }; }) {
//     console.log('The access token expires in ' + data.body['expires_in']);
//     console.log('The access token is ' + data.body['access_token']);
//     // Save the access token so that it's used in future calls
//     spotifyApi.setAccessToken(data.body['access_token']);
//   },
//   function(err: any) {
//     console.log('Something went wrong when retrieving an access token', err);
//   }
// )

// First retrieve an access token
// spotifyApi.authorizationCodeGrant(authorizationCode).then(
//     function(data) {
//       // Set the access token and refresh token
//       spotifyApi.setAccessToken(data.body['access_token']);
//       spotifyApi.setRefreshToken(data.body['refresh_token']);

//       // Save the amount of seconds until the access token expired
//       tokenExpirationEpoch =
//         new Date().getTime() / 1000 + data.body['expires_in'];
//       console.log(
//         'Retrieved token. It expires in ' +
//           Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
//           ' seconds!'
//       );
//     },
//     function(err) {
//       console.log(
//         'Something went wrong when retrieving the access token!',
//         err.message
//       );
//     }
//   );

// spotifyApi.authorizationCodeGrant(authorizationCode).then(
//   function(data) {
//     console.log('The token expires in ' + data.body['expires_in']);
//     console.log('The access token is ' + data.body['access_token']);
//     console.log('The refresh token is ' + data.body['refresh_token']);

//     // Set the access token on the API object to use it in later calls
//     spotifyApi.setAccessToken(data.body['access_token']);
//     spotifyApi.setRefreshToken(data.body['refresh_token']);
//   },
//   function(err) {
//     console.log('Something went wrong!', err);
//   }
// );

// spotifyApi.clientCredentialsGrant().then(
//   function(data) {
//     console.log('The access token expires in ' + data.body['expires_in']);
//     console.log('The access token is ' + data.body['access_token']);

//     // Save the access token so that it's used in future calls
//     spotifyApi.setAccessToken(data.body['access_token']);
//   },
//   function(err) {
//     console.log(
//       'Something went wrong when retrieving an access token',
//       err.message
//     );
//   }
// );

console.log("spotifyApi ", spotifyApi)

// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
//     function(data) {
//       console.log('Artist albums', data.body);
//     },
//     function(err) {
//       console.error(err);
//     }
//   );

// spotifyApi.searchPlaylists('workout')
//   .then(function(data: { body: any; }) {
//     console.log('Found playlists are', data.body);
//   }, function(err: any) {
//     console.log('Something went wrong!', err);
//   });

// spotifyApi.getMe()
//   .then(function(data: { body: any; }) {
//     console.log('Some information about the authenticated user', data.body);
//   }, function(err: any) {
//     console.log('Something went wrong!', err);
//   });

  spotifyApi.getPlaylist('3byvJcO0IZvAcaezEOnXxI')
  .then(function(data: { body: any; }) {
    console.log('Some information about this playlist', data.body);
  }, function(err: any) {
    console.log('Something went wrong!', err);
  });

  console.log('spotifyAPI ', spotifyApi)

  // spotifyApi.reorderTracksInPlaylist('3byvJcO0IZvAcaezEOnXxI', 0, 10, options)
  // .then(function(data) {
  //   console.log('Tracks reordered in playlist!');
  // }, function(err) {
  //   console.log('Something went wrong!', err);
  // });


// https://open.spotify.com/playlist/3byvJcO0IZvAcaezEOnXxI?si=259d8ba7a8964b01&nd=1
// Get a user's playlists
// spotifyApi.getUserPlaylists('Diaspora')
//   .then(function(data: { body: any; }) {
//     console.log('Retrieved playlists', data.body);
//   },function(err: any) {
//     console.log('Something went wrong!', err);
//   });

// // Create a private playlist
// spotifyApi.createPlaylist('My playlist', { 'description': 'My description', 'public': true })
//   .then(function() {
//     console.log('Created playlist!');
//   }, function(err: any) {
//     console.log('Something went wrong!', err);
//   });

//   // Add tracks to a playlist
// spotifyApi.addTracksToPlaylist('5ieJqeLJjjI8iJWaxeBLuK', ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"])
// .then(function() {
//   console.log('Added tracks to playlist!');
// }, function(err: any) {
//   console.log('Something went wrong!', err);
// });

export default spotifyApi

// export { LOGIN_URL };
