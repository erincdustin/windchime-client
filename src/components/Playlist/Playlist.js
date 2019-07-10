import React from 'react';

function Playlist(props) {

  const url =  `https://open.spotify.com/embed/user/spotify/playlist/${props.playlistId}`;
  
  return (
    <div className="container">
      <div><i class="fa fa-spinner"></i></div>
      <iframe title={props.playlistId} src={url} frameBorder="0" height="80" width="380" allowTransparency="true" ></iframe>
    </div>
  );
}

export default Playlist;