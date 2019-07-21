import React from 'react';
import { Link } from 'react-router-dom';
import Playlist from '../Playlist/Playlist';
import config from '../../config'
import { format } from 'date-fns'
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
    return (
     <div className="result" key={playlist.playlist_id}>
       <div class="banner">Playlist {index + 1}: {format(playlist.date_created, 'Do MMM YYYY')}</div>
       <p>Energy: {!playlist.energy ? '' : playlist.energy*10}</p>
       <p>Happiness: {!playlist.valence ? '' : playlist.valence*10}</p>
       <p>Tempo: {!playlist.tempo ? '' : playlist.tempo*10}</p>
       <p>Popularity: {!playlist.popularity ? '' : playlist.popularity/10}</p>
       <Playlist playlistId={playlist.playlist_id}/>
       <button className="btn mood" onClick={() => {
         TokenService.clearGenreToken();
         TokenService.clearPlaylistToken();
         this.props.history.push('/getWeather');
       }}>Make Another Playlist</button>
     </div>
    );
  });
  
  /*eslint-disable-next-line*/
  if (this.state.userPlaylists == 0 || this.state.userPlaylists == undefined ) {
    return (
    <div>
      <h4>No past playlists to display</h4>
      <button className="btn mood"><Link className="link" to="/getWeather">Make Another Playlist</Link></button>
    </div>
      )
  }
  return (
    <div>
      {mappedPlaylists}
    </div>
  );
}
}

export default UserPlaylists;