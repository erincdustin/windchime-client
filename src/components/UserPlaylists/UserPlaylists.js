import React from 'react';
import Playlist from '../Playlist/Playlist';
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WindChimeContext from '../../contexts/windchime-context';
import WindChimeApiService from '../../services/api-service';
import TokenService from '../../services/token-service';
import './UserPlaylists.css';

class UserPlaylists extends React.Component {

  static contextType = WindChimeContext;

  state = {
    playlists: '',
  }

  componentDidMount() {
    WindChimeApiService.getPlaylists()
    .then(res => {
      if(res !== []){
       this.setState({ playlists: res})
      }})
    .catch(err => {
      this.context.setError(err)
    })
  }

  renderPlaylists = () => {
    let mappedPlaylists;

    if(this.state.playlists){
      mappedPlaylists = this.state.playlists.filter((playlist) => playlist.user_id === this.context.id).map((playlist, index) => {
        let energy = [];
        let valence = [];
        let popularity = [];
        let tempo = [];
    
        if(!playlist.energy){
          energy = [''];
        } else {
          for(let i = 0; i<(playlist.energy*10); i++){
          energy.push(<FontAwesomeIcon className="blue rating" icon='circle' />);
          }
        }
    
        if(!playlist.valence){
          valence = [''];
        } else {
          for(let i = 0; i<(playlist.valence*10); i++){
          valence.push(<FontAwesomeIcon className="blue rating" icon='circle' />);
          }
        }
    
        if(!playlist.popularity){
          popularity = [''];
        } else {
          for(let i = 0; i<(playlist.popularity/10); i++){
          popularity.push(<FontAwesomeIcon className="blue rating" icon='circle' />);
          }
        }
    
        if(!playlist.tempo){
          tempo = [''];
        } else {
          for(let i = 0; i<(playlist.tempo*10); i++){
          tempo.push(<FontAwesomeIcon className="blue rating" icon='circle' />);
          }
      }
    
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