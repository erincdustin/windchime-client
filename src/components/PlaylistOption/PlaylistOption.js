import React from 'react';
import TokenService from '../../services/token-service';
import WindChimeContext from '../../contexts/windchime-context';

class PlaylistOption extends React.Component {

  static contextType = WindChimeContext;

  renderOption(){
    let { genreChoice } = this.context
    let option='';
    (genreChoice)
      ? option = this.context.genreChoice
      : option = 'my top artists'
    return option
  }

  render() {  
    return (
      <div>
        <div className="ribbon two">
        <div className="ribbon-header">Playlist Options</div>
          <span className="ribbon-text">
          <span className="hidden">{this.renderOption()}</span>
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