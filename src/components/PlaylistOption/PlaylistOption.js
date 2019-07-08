import React from 'react';

function PlaylistOption(props) {
  let option='';
  if (props.genreOption){
    option = props.genreOption
  } if (props.topArtists){
    option = 'Top Artists'
  }

  return (
    <div>
      <h3 className="ribbon">Playlist Options<span className="ribbon-text">{option}</span></h3>
    </div>
  );
}

export default PlaylistOption;