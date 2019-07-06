import React from 'react';
import {Link} from 'react-router-dom';

function PlayListResults(props) {

  let playlist = '';
  const url =  `https://open.spotify.com/embed/user/spotify/playlist/${props.playlistId}`;
  if(props.snapshot !== null) {
    playlist = 
    <div>
      <h3>Don't like this playlist?</h3>
      <button><Link to="/changeGenreParams">Change Playlist Mood Settings</Link></button>
      <button><Link to="/genreOption">Change Genre</Link></button>
      <br />
      <iframe title={props.playlistId} src={url} width="300" height="380" frameBorder="0" allowTransparency="true" ></iframe>
    </div>;
  }

  return (
    <div>
      {playlist}
    </div>
  );
}

export default PlayListResults;