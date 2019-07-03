import React from 'react';
import { Link } from 'react-router-dom'

function SeedArtist(props) {
  return (
    <div>
      <h3>Use your Top Artists:</h3>
      <button onClick={()=> props.getArtistPlaylist()}>Go!</button>
      <button><Link to="/playlistSetup">Back to Playlist Options</Link></button>
      <button><Link to="/getWeather">Start Over</Link></button>
    </div>
  );
}

export default SeedArtist;