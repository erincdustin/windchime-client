import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Playlist.css';

function Playlist(props) {

  const url = `https://open.spotify.com/embed/user/spotify/playlist/${props.playlistId}`;
  
  return (
    <div className="container">
      <div className="loading">Loading <FontAwesomeIcon className="blue spinner fa-spin" icon='spinner' /></div>
      <iframe className="iframe-box" title={props.playlistId} src={url} frameBorder="0"></iframe>
    </div>
  );
}

export default Playlist;