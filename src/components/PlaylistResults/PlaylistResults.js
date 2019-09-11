import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WindChimeContext from '../../contexts/windchime-context';
import './PlaylistResults.css';

class PlayListResults extends React.Component {

  static contextType = WindChimeContext;

  renderPlaylist(){
    let playlist = '';
    const { playlistId, snapshot} = this.context
    const url =  `https://open.spotify.com/embed/user/spotify/playlist/${playlistId}`;
    if(snapshot !== null) {
      playlist = 
      <div>
        <button className="btn mood"><Link className="link" to="/changeGenreParams">Change Mood Settings</Link></button>
        <div className="loading-result">Loading <FontAwesomeIcon className="blue spinner fa-spin" icon='spinner' /></div>
        <iframe className="iframe" title={playlistId} src={url} frameBorder="0" allowtransparency="true" ></iframe>
      </div>;
    }
    return playlist
  }

  render() {
    return (
      <div>
        <div className="ribbon three"><span className="ribbon-header">Your Playlist</span></div>
        <div className="results">
        {this.renderPlaylist()}
        </div>
      </div>
    );
  }
}

export default PlayListResults;