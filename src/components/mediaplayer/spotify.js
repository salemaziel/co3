import SpotifyPlayer from 'react-spotify-player';
 
// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300,
};
const view = 'coverart'; // or 'coverart'
const theme = 'black'; // or 'white'
 


<SpotifyPlayer
  uri="spotify:album:6NwNaCmHzQNvTSi0hRpALe"
  size={{width: '100%', height: 500}}
  view="list"
  theme="black"
/>