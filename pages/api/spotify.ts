import type { NextApiRequest, NextApiResponse } from "next"
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
//   clientId: process.env.SPOTIFY_CLIENT_ID,
//   clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
//   redirectUri: process.env.SPOTIFY_CALLBACK_URL
    
});

const authorizationCode =
  '<insert authorization code with user-read-private and user-read-email scopes>';

  // When our access token will expire
let tokenExpirationEpoch;

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

console.log('spotifyApi ', spotifyApi)

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

//   spotifyApi.getPlaylist('5ieJqeLJjjI8iJWaxeBLuK')
//   .then(function(data: { body: any; }) {
//     console.log('Some information about this playlist', data.body);
//   }, function(err: any) {
//     console.log('Something went wrong!', err);
//   });
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

export default spotifyApi;

// export { LOGIN_URL };
  