import React from 'react';
import Playlist from '../Playlist/Playlist';
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WindChimeContext from '../../contexts/windchime-context';
import TokenService from '../../services/token-service';
import './UserPlaylists.css';

class UserPlaylists extends React.Component {

  static contextType = WindChimeContext;

  renderValues = (playlistValue, value) => {
    if(!playlistValue){
      value = [''];
    } else {
      for(let i = 0; i<(playlistValue*10); i++){
      value.push(<FontAwesomeIcon key={i} className="blue rating" icon='circle' />);
      }
    }
    return value;
  }

  renderPlaylists = () => {
    let { userPlaylists } = this.context
    let mappedPlaylists;

    if(userPlaylists){
      mappedPlaylists = userPlaylists
        .filter((playlist) => playlist.user_id === this.context.id)
        .map((playlist, index) => {
          let energy = [];
          let valence = [];
          let tempo = [];
          let popularity = [];

          this.renderValues(playlist.energy, energy)
          this.renderValues(playlist.valence, valence)
          this.renderValues(playlist.tempo, tempo)
          this.renderValues(playlist.popularity/100, popularity)
      
          return (
          <div className="result" key={index}>
            <div className="banner">Playlist {index + 1}: {format(playlist.date_created, 'Do MMM YYYY')}</div>
            <p>{!playlist.energy ? '' : 'Energy:'}{energy}</p>
            <p>{!playlist.valence ? '' : 'Happiness:'}{valence}</p>
            <p>{!playlist.popularity ? '' : 'Popularity:'}{popularity}</p>
            <p>{!playlist.tempo ? '' : 'Tempo:'}{tempo}</p>
            <Playlist key={index} playlistId={playlist.playlist_id}/>
          </div>
          );
        });
    }

    return <div className="flex">{mappedPlaylists}</div>
  }

  render() {
  return(
    <div className="user-playlists">
      <h4>View your saved Wind Chime playlists and mood settings:</h4>
      <button className="btn mood" onClick={() => {
         this.props.history.push('/results');
       }}>Back</button>
      <button className="btn mood" onClick={() => {
         TokenService.clearGenreToken();
         TokenService.clearPlaylistToken();
         this.props.history.push('/getWeather');
       }}>Make Playlist</button>
       {this.renderPlaylists()}
    </div>
  )
  }
}

export default UserPlaylists;