import React from 'react';

function Playlist(props) {

  const url =  `https://open.spotify.com/embed/user/spotify/playlist/${props.playlistId}`;
  
  return (
    <div>
      <iframe title={props.playlistId} src={url} width="500" height="80" frameBorder="0" allowTransparency="true" ></iframe>
    </div>
  );
}

export default Playlist;