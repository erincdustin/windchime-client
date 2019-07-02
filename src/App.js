import React from 'react';
import queryString from 'query-string';
import Header from './Header/Header';
import PlaylistOptions from './PlaylistOptions/PlaylistOptions';
import PlaylistResults from './PlaylistResults/PlaylistResults';

class App extends React.Component {
  state= {
      error: '',
      songs: null,
      locationKey: null,
      weather: null,
      genreChoice: null,
      id: null,
      topArtists: null,
      playlistId: null,
      snapshot: null,
      targetEnergy: '',
      targetValence: '',
      targetTempo: '',
      targetPopularity: '',
  };

  handleGenrePlaylist = () => {
    console.log('this.state', this.state);

    const BASE_URL = `https://api.spotify.com/v1/recommendations?seed_genres=${this.state.genreChoice}`;
    let FETCH_URL = BASE_URL;
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
   
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
      .then(res => (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
  )
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
        .then(res => (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
        .then(res=> {
          this.setState({ id: res.id })
          console.log(this.state.id);

          const PLAYLIST_URL = `https://api.spotify.com/v1/users/${this.state.id}/playlists`;
          // const newDate = new Date();
          const playlistBody = JSON.stringify({ name: `Wind Chime: ${this.state.genreChoice} ${this.state.weather.WeatherText}` })

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
          .then(res => (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
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
            .then(res => (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
            .then(res=> {
              this.setState({ snapshot: res.snapshot_id});
            })
          })
        })
      })
      .catch(error => {
        this.setState({error});
      })
  }

  handleArtistPlaylist = () => {
    const ARTISTS_URL = 'https://api.spotify.com/v1/me/top/artists?limit=5'
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    
    const myOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch(ARTISTS_URL, myOptions)
      .then(res => (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
  )
      .then(res=> {
        const artists = res.items;
        const artistString = artists.map(artist => {
          return artist.id;
        }).join(',');
        console.log(artistString)
        this.setState({ topArtists: artistString })
      
      const NEW_BASE_URL = `https://api.spotify.com/v1/recommendations?seed_artists=${this.state.topArtists}`;
      let NEW_FETCH_URL = NEW_BASE_URL;
      let parsed = queryString.parse(window.location.search);
      let accessToken = parsed.access_token;

      if (this.state.targetEnergy !== '') {
        NEW_FETCH_URL += `&target_energy=${this.state.targetEnergy}`;
      }
      if (this.state.targetValence !== '') {
        NEW_FETCH_URL += `&target_valence=${this.state.targetValence}`;
      }
      if (this.state.targetTempo !== '') {
        NEW_FETCH_URL += `&target_tempo=${this.state.targetTempo}`;
      }
      if (this.state.targetPopularity !== '') {
        NEW_FETCH_URL += `&target_popularity=${this.state.targetPopularity}`;
      }

      const myOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        },
        mode: 'cors',
        cache: 'default'
      };

      return fetch(NEW_FETCH_URL, myOptions)
        .then(res => (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
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
        .then(res => (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
        .then(res=> {
          this.setState({ id: res.id })
          console.log(this.state.id);

          const PLAYLIST_URL = `https://api.spotify.com/v1/users/${this.state.id}/playlists`;
          let parsed = queryString.parse(window.location.search);
          let accessToken = parsed.access_token;
          // const newDate = new Date();
          const playlistBody = JSON.stringify({ name: `Wind Chime: ${this.state.weather.WeatherText}` })

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
          .then(res => (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
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
            let parsed = queryString.parse(window.location.search);
            let accessToken = parsed.access_token;

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
            .then(res => (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
            .then(res=> {
              this.setState({ snapshot: res.snapshot_id});
            })
          })
        })
      })
    })
    .catch(error => {
      this.setState({error});
    })
  }

  handleSearchCity = (postalCode) => {
    const CITY_BASE_URL = `http://dataservice.accuweather.com/locations/v1/postalcodes/US/search?apikey=HGhQvGsArNhNHkbK4EAnuX09P8mP8Qk8&q=${postalCode}`;

    fetch(CITY_BASE_URL)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        const locationKey = res[0].Key;
        this.setState({ locationKey })
        console.log(this.state.locationKey);
        const WEATHER_BASE_URL = `http://dataservice.accuweather.com/currentconditions/v1/${this.state.locationKey}?apikey=HGhQvGsArNhNHkbK4EAnuX09P8mP8Qk8&language=en-us&details=true`;

        return fetch(WEATHER_BASE_URL)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          const weather = res[0];
          this.setState({ weather })
          if(weather.CloudCover <= 25) {
            this.setState({ targetValence: .8 })
            this.setState({ targetTempo: .8 })
            this.setState({ targetEnergy: .8 })
          }
          if(weather.CloudCover > 25 && weather.CloudCover < 50) {
            this.setState({ targetValence: .6 })
            this.setState({ targetTempo: .6 })
            this.setState({ targetEnergy: .6 })
          }
          if(weather.CloudCover > 50 && weather.CloudCover < 75) {
            this.setState({ targetValence: .4 })
            // this.setState({ targetTempo: .4 })
            this.setState({ targetEnergy: .4 })
          }
          if(weather.CloudCover > 75) {
            this.setState({ targetValence: .2 })
            // this.setState({ targetTempo: .2 })
            this.setState({ targetEnergy: .2 })
          }
          // if(weather.PrecipitationType) {
          //   this.setState({ targetValence: .4 })
          // }
          console.log(this.state);
        })
      })

  }

  handleSetGenre = (genreChoice) => {
    this.setState({ genreChoice });
  }

  handleSetEnergy = (energyLevel) => {
    this.setState({ targetEnergy: Number(energyLevel) });
  }

  handleSetValence = (valenceLevel) => {
    this.setState({ targetValence: Number(valenceLevel) });
  }

  handleSetTempo = (tempoLevel) => {
    this.setState({ targetTempo: Number(tempoLevel) });
  }

  handleSetPopularity = (popularityLevel) => {
    this.setState({ targetPopularity: Number(popularityLevel) });
  }

  render() {
    console.log(this.state);
    console.log(process.env.API_KEY);
  return (
    <div className="App">            
      <header className="App__header">
          <Header />
      </header>
      <main className="App__main">
        <section className="Options">
          <PlaylistOptions searchCity= {this.handleSearchCity} weather={this.state.weather} setGenre={this.handleSetGenre} setEnergy={this.handleSetEnergy} setValence={this.handleSetValence} setTempo={this.handleSetTempo} setPopularity={this.handleSetPopularity} getArtistPlaylist={this.handleArtistPlaylist} getGenrePlaylist={this.handleGenrePlaylist} targetEnergy={this.state.targetEnergy} targetValence={this.state.targetValence} targetTempo={this.state.targetTempo} targetPopularity={this.state.targetPopularity}/>
        </section>
        <section>
          <PlaylistResults playlistId={this.state.playlistId} snapshot={this.state.snapshot}/>
          {this.state.error}
        </section>
      </main>
    </div>
  );
  }
}

export default App;