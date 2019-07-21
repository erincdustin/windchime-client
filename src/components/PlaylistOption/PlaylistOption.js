import React from 'react';
import TokenService from '../../services/token-service';

function PlaylistOption(props) {
  let option='';
  if (props.genreOption){
    option = props.genreOption
  } if (props.topArtists){
    option = 'my top artists'
  }

  return (
    <div>
      <div className="ribbon two">
      <div className="ribbon-header">Playlist Options</div>
        <span className="ribbon-text">
        <span className="hidden">{option}</span>
        <button className="btn weather" onClick={() => {
          TokenService.clearGenreToken();
          props.history.push('/genreOption');
        }}>Change</button>
        </span>
        </div>
    </div>
  );
}

export default PlaylistOption;