import React from 'react';
import {Link} from 'react-router-dom';
import './PlaylistResults.css';

function PlayListResults(props) {
  let playlist = '';
  const url =  `https://open.spotify.com/embed/user/spotify/playlist/${props.playlistId}`;
  if(props.snapshot !== null) {
    playlist = 
    <div>
      <button className="btn mood"><Link className="link" to="/changeGenreParams">Change Mood Settings</Link></button>
      <div className="loading-result">Loading...</div>
      <iframe className="iframe" title={props.playlistId} src={url} frameBorder="0" allowTransparency="true" ></iframe>
    </div>;
  }

  return (
    <div>
      <div className="ribbon three"><span className="ribbon-header">Your Playlist</span></div>
      <div className="results">
      {playlist}
      </div>
    </div>
  );
}

export default PlayListResults;