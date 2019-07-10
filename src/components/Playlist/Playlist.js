import React from 'react';

function Playlist(props) {

  const url =  `https://open.spotify.com/embed/user/spotify/playlist/${props.playlistId}`;
  
  return (
    <div className="container">
      <div className="loading"><i class="fa fa-spinner"></i></div>
      <iframe class="iframe" title={props.playlistId} src={url} width="250" height="380" frameBorder="0" allowTransparency="true" ></iframe>
    </div>
  );
}

export default Playlist;