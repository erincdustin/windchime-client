import React from 'react';
import Header from './Header/Header';
import PlaylistOptions from './PlaylistOptions/PlaylistOptions';
import PlaylistResults from './PlaylistResults/PlaylistResults';

class App extends React.Component {
  state= {
      accessToken: '',
      songs: null,
      locationKey: '15038_PC',
      weather: null,
      genreChoice: null,
      id: null,
      topArtists: null,
      playlistId: null,
      snapshot: null,
      targetEnergy: '',
      targetValence: '',
      targetTempo: '',
      targetDance: '',
      targetPopularity: '',
  };

  handleGenrePlaylist = () => {
    console.log('this.state', this.state);

    const BASE_URL = `https://api.spotify.com/v1/recommendations?seed_genres=${this.state.genreChoice}`;
    let FETCH_URL = BASE_URL;

    if (this.state.targetEnergy !== '') {
      FETCH_URL += `&target_energy=${this.state.targetEnergy}`;
    }
    if (this.state.targetValence !== '') {
      FETCH_URL += `&target_valence=${this.state.targetValence}`;
    }
    if (this.state.targetTempo !== '') {
      FETCH_URL += `&target_tempo=${this.state.targetTempo}`;
    }
    if (this.state.targetPopularity !== '') {
      FETCH_URL += `&target_popularity=${this.state.targetPopularity}`;
    }
    
    const accessToken = this.state.accessToken;

    const myOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(res => {
        const songs = res.tracks;        
        this.setState({ songs });

        const myOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
          },
          mode: 'cors',
          cache: 'default'
        };
        return fetch('https://api.spotify.com/v1/me', myOptions)
        .then(res => res.json())
        .then(res=> {
          this.setState({ id: res.id })
          console.log(this.state.id);

          const PLAYLIST_URL = `https://api.spotify.com/v1/users/${this.state.id}/playlists`;
          const accessToken = this.state.accessToken;
          const newDate = new Date();
          const playlistBody = JSON.stringify({ name: `Wind Chime ${newDate}` })

          const myOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + accessToken
            },
            body: playlistBody,
            mode: 'cors',
            cache: 'default'
          };

          return fetch(PLAYLIST_URL, myOptions)
          .then(res => res.json())
          .then(res=> {
            this.setState({ playlistId: res.id });
            console.log(this.state.playlistId);

            let songs = null;
            let mappedSongs = null;
            if (this.state.songs !== null) {
              songs = this.state.songs;
              mappedSongs = songs.map(result => {
              const songId = result.id;
              return `spotify:track:${songId}`;
              }).join(',');
              console.log(mappedSongs);
            }
            const URL = `https://api.spotify.com/v1/playlists/${this.state.playlistId}/tracks?uris=${mappedSongs}`;
            const accessToken = this.state.accessToken;

            const myOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
              },
              mode: 'cors',
              cache: 'default'
            };

            fetch(URL, myOptions)
            .then(res => res.json())
            .then(res=> {
              this.setState({ snapshot: res.snapshot_id});
            })
          })
        })
      })
  }

  handleSearchWeather = () => {
    console.log('this.state', this.state);
   
    const WEATHER_BASE_URL = `http://dataservice.accuweather.com/currentconditions/v1/${this.state.locationKey}?apikey=HGhQvGsArNhNHkbK4EAnuX09P8mP8Qk8&language=en-us&details=true`;

    fetch(WEATHER_BASE_URL)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        const weather = res[0];
        this.setState({ weather })
      })
  }

  render() {
  return (
    <div className="App">            
      <header className="App__header">
          <Header />
      </header>
      <main className="App__main">
        <section className="Options">
          <PlaylistOptions searchWeather= {this.handleSearchWeather} weather={this.state.weather}/>
        </section>
        <section>
          <PlaylistResults playlistId={this.state.playlistId} snapshot={this.state.snapshot}/>
        </section>
      </main>
    </div>
  );
  }
}

export default App;