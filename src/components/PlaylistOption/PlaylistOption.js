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
      <h3 className="ribbon two">
        Playlist Options
        <span className="ribbon-text">{option}
        <button><Link className="link" to="/genreOption">Change</Link></button>
        </span>
      </h3>
    </div>
  );
}

export default PlaylistOption;