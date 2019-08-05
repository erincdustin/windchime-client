import React from 'react';
import { Link } from 'react-router-dom';
import Playlist from '../Playlist/Playlist';
import config from '../../config'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './UserPlaylists.css';
import TokenService from '../../services/token-service';

class UserPlaylists extends React.Component {

  state = {
    userPlaylists: [],
  }

  componentDidMount() {
    const URL = `${config.API_ENDPOINT}/playlists`;

    return fetch(URL)
    .then(res => (!res.ok)
    ? res.json().then(e => Promise.reject(e))
    : res.json()
)
    .then(res=> {
      this.setState({ userPlaylists: res })
  })
}

  render() {
  const mappedPlaylists = this.state.userPlaylists.filter((playlist) => playlist.user_id === this.props.id).map((playlist, index) => {
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
     <div className="result" key={playlist.playlist_id}>
       <div class="banner">Playlist {index + 1}: {format(playlist.date_created, 'Do MMM YYYY')}</div>
       <p>{!playlist.energy ? '' : 'Energy:'}{energy}</p>
       <p>{!playlist.valence ? '' : 'Happiness:'}{valence}</p>
       <p>{!playlist.popularity ? '' : 'Popularity:'}{popularity}</p>
       <p>{!playlist.tempo ? '' : 'Tempo:'}{tempo}</p>
       <Playlist playlistId={playlist.playlist_id}/>
     </div>
    );
  });
  
  /*eslint-disable-next-line*/
  if (this.state.userPlaylists == 0 || this.state.userPlaylists == undefined ) {
    return (
    <div>
      <h4 className="none">No past playlists to display</h4>
      <button className="btn mood" onClick={() => {
         TokenService.clearGenreToken();
         TokenService.clearPlaylistToken();
         this.props.history.push('/getWeather');
       }}>Make a Playlist</button>
    </div>
      )
  }
  return (
    <div className="playlist-center">
      <h4>Welcome Back!</h4>
      <p>See your past Wind Chime playlists below for mood levels and play buttons</p>
      <button className="btn" onClick={() => {
         this.props.history.goBack();
       }}>Back</button>
      <button className="btn mood" onClick={() => {
         TokenService.clearGenreToken();
         TokenService.clearPlaylistToken();
         this.props.history.push('/getWeather');
       }}>Make Another Playlist</button>
       <div className="flex">
        {mappedPlaylists}
      </div>
    </div>
  );
}
}

export default UserPlaylists;