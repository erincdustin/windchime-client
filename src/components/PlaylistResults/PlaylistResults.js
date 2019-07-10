import React from 'react';
import {Link} from 'react-router-dom';
import './PlaylistResults.css';

function PlayListResults(props) {
  // let styling = '';
  // if (props.weather.PrecipitationType === "Rain") {
  //   styling = ".rain"
  // }
  let playlist = '';
  const url =  `https://open.spotify.com/embed/user/spotify/playlist/${props.playlistId}`;
  if(props.snapshot !== null) {
    playlist = 
    <div c>
      <button className="btn mood"><Link className="link" to="/changeGenreParams">Change Mood Settings</Link></button>
      <iframe class="iframe" title={props.playlistId} src={url} width="250" height="380" frameBorder="0" allowTransparency="true" ></iframe>
    </div>;
  }

  return (
    <div>
      <div className="ribbon three"><span className="ribbon-header">Your Playlist</span></div>
      <div className="results">{playlist}</div>
    </div>
  );
}

export default PlayListResults;