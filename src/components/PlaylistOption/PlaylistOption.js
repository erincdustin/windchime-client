import React from 'react';
import {Link} from 'react-router-dom';

function PlaylistOption(props) {
  let option='';
  if (props.genreOption){
    option = props.genreOption
  } if (props.topArtists){
    option = 'Top Artists'
  }

  return (
    <div>
      <div className="ribbon two">
      <div className="ribbon-header">Playlist Options</div>
        <span className="ribbon-text">
        <span className="hidden">{option}</span>
        <button class="btn weather"><Link className="link" to="/genreOption">Change</Link></button>
        </span>
        </div>
    </div>
  );
}

export default PlaylistOption;