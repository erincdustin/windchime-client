import React from 'react';
import './Playlist.css';

function Playlist(props) {

  const url = `https://open.spotify.com/embed/user/spotify/playlist/${props.playlistId}`;
  
  return (
    <div className="container">
      <iframe className="iframe-box" title={props.playlistId} src={url} frameBorder="0" allowTransparency="true" ></iframe>
    </div>
  );
}

export default Playlist;