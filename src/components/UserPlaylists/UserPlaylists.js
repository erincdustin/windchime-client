import React from 'react';
import { Link } from 'react-router-dom';
import Playlist from '../Playlist/Playlist';
import config from '../../config'
import { format } from 'date-fns'
import './UserPlaylists.css';

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
      console.log(res);
      this.setState({ userPlaylists: res })
  })
}

  render() {
  const mappedPlaylists = this.state.userPlaylists.filter((playlist) => playlist.user_id === this.props.id).map((playlist, index) => {
    return (
     <div className="result">
       <div class="banner">Playlist {index + 1}: {format(playlist.date_created, 'Do MMM YYYY')}</div>
       <p>Energy: {!playlist.energy ? '' : playlist.energy*10}</p>
       <p>Happiness: {!playlist.valence ? '' : playlist.valence*10}</p>
       <p>Tempo: {!playlist.tempo ? '' : playlist.tempo*10}</p>
       <p>Popularity: {!playlist.popularity ? '' : playlist.popularity/10}</p>
       <Playlist key={playlist.playlist_id} playlistId={playlist.playlist_id}/>
       <button className="btn mood"><Link className="link" to="/getWeather">Make Another Playlist</Link></button>
     </div>
    );
  });
  
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