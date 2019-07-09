import React from 'react';
import {Link} from 'react-router-dom';
import './PlaylistResults.css';

function PlayListResults(props) {
  let styling = '';
  if (props.weather.PrecipitationType === "Rain") {
    styling = ".rain"
  }
  let playlist = '';
  const url =  `https://open.spotify.com/embed/user/spotify/playlist/${props.playlistId}`;
  if(props.snapshot !== null) {
    playlist = 
    <div>
      <h3>Don't like this playlist?</h3>
      <button className="btn-results"><Link className="link" to="/changeGenreParams">Change Playlist Mood Settings</Link></button>
      {/* <button className="btn-results"><Link className="link" to="/genreOption">Change Genre</Link></button> */}
      <iframe class="iframe" title={props.playlistId} src={url} width="250" height="380" frameBorder="0" allowTransparency="true" ></iframe>
    </div>;
  }

  return (
    <div>
      <h3 className="ribbon three">Your Playlist</h3>
      <div className="results">{playlist}</div>
    </div>
  );
}

export default PlayListResults;