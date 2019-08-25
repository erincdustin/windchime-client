import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WindChimeContext from '../../contexts/windchime-context';
import './PlaylistResults.css';

class PlayListResults extends React.Component {

  static contextType = WindChimeContext;

  render() {
    let playlist = '';
    const url =  `https://open.spotify.com/embed/user/spotify/playlist/${this.context.playlistId}`;
    if(this.context.snapshot !== null) {
      playlist = 
      <div>
        <button className="btn mood"><Link className="link" to="/changeGenreParams">Change Mood Settings</Link></button>
        <div className="loading-result">Loading <FontAwesomeIcon className="blue spinner fa-spin" icon='spinner' /></div>
        <iframe className="iframe" title={this.context.playlistId} src={url} frameBorder="0" allowtransparency="true" ></iframe>
      </div>;
    }

    return (
      <div>
        <div className="ribbon three"><span className="ribbon-header">Your Playlist</span></div>
        <div className="results">
        {playlist}
        </div>
      </div>
    );
  }
}

export default PlayListResults;