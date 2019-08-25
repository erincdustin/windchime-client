import React from 'react';
import TokenService from '../../services/token-service';
import WindChimeContext from '../../contexts/windchime-context';

class PlaylistOption extends React.Component {

  static contextType = WindChimeContext;

  render() {
    let option='';
    if (this.context.genreOption){
      option = this.context.genreOption
    } if (this.context.topArtists){
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
            this.props.history.push('/genreOption');
          }}>Change</button>
          </span>
          </div>
      </div>
    );
  }
}

export default PlaylistOption;