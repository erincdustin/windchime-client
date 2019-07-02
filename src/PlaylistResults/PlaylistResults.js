import React from 'react';

function PlayListResults(props) {

  let playlist = '';
  const url =  `https://open.spotify.com/embed/user/spotify/playlist/${props.playlistId}`;
  if(props.snapshot !== null) {
    playlist = <iframe title={props.playlistId} src={url} width="300" height="380" frameBorder="0" allowTransparency="true" ></iframe>;
  }

  return (
    <div >
      <h3>Playlist Results:</h3>
      {playlist}
    </div>
  );
}

export default PlayListResults;