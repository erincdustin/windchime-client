import React from 'react';
import { Link } from 'react-router-dom';
import Playlist from '../Playlist/Playlist';
import config from '../../config'

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
  console.log(this.state.userPlaylists[0])
  const mappedPlaylists = this.state.userPlaylists.filter((playlist) => playlist.user_id === this.props.id).map((playlist, index) => {
    return (
     <div>
       <h4>Playlist {index + 1}:</h4>
       <p>Energy: {playlist.energy*10}</p>
       <p>Happiness: {playlist.valence*10}</p>
       <p>Tempo: {playlist.tempo*10}</p>
       <p>Popularity: {playlist.popularity/10}</p>
       <Playlist key={playlist.playlist_id} playlistId={playlist.playlist_id}/>
     </div>
    );
  });
  // const mappedPlaylists = testData.filter(playlist => playlist.user_id === props.id).map(playlist => 'hello');
  if (this.state.userPlaylists == 0 || this.state.userPlaylists == undefined ) {
    return (
    <div>
      <h3>No past playlists to display</h3>
      <button><Link to="/getWeather">Make Another Playlist</Link></button>
    </div>
      )
  }
  return (
    <div >
      <h3>Playlist Results:</h3>
      {mappedPlaylists}
      <button><Link to="/getWeather">Make Another Playlist</Link></button>
    </div>
  );
}
}

export default UserPlaylists;