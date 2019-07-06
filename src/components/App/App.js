import React from 'react';
import { Route, Switch } from 'react-router-dom'
import config from '../../config';
// import Header from '../Header/Header';
import Redirect from '../../routes/Redirect';
import TokenService from '../../services/token-service';
import HomePage from '../../routes/HomePage';
import LandingPage from '../../routes/LandingPage';
import GenreOption from '../../routes/GenreOption';
import ArtistOption from '../../routes/ArtistOption';
import PastPlaylists from '../../routes/PastPlaylists';
import ChangeGenreParams from '../../routes/ChangeGenreParams';
import ChangeArtistParams from '../../routes/ChangeArtistParams';
import Results from '../../routes/Results';
 
class App extends React.Component {
  state= {
      error: '',
      songs: null,
      locationKey: null,
      weather: null,
      // weather: {
      //   IsDayTime: true,
      //   Temperature: {
      //     Imperial: {
      //       Value: 92,
      //     },
      //   HasPrecipitation: null,
      //   },
      //   CloudCover: 45,
      //   PrecipitationType: null,
      //   WeatherText: 'Partly Cloudy',
      // },
      genreChoice: null,
      id: null,
      topArtists: null,
      playlistId: null,
      snapshot: null,
      targetEnergy: null,
      targetValence: null,
      targetTempo: null,
      targetPopularity: null,
  };

  componentDidMount() {
    let accessToken = TokenService.getAuthToken();
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
      const URL = `${config.API_ENDPOINT}/users`;

      return fetch(URL)
        .then(res => (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
      .then(res => {
        let user = res.filter(user => user.id === this.state.id);
        console.log(user);
        if (user === undefined || user.length == 0) {
          const URL= `${config.API_ENDPOINT}/users`
          const userBody= JSON.stringify({
                id: this.state.id
              })
              console.log(userBody);
              const myOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body:userBody
              };

              return fetch(URL, myOptions)
              .then(res => (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
          .then(res => {
            console.log(`${res.id} added`);
            this.setState({ returningUser: true })
          })} else {
          console.log('user found')
          }
        })
      })
    };

  handleGenrePlaylist = () => {
    this.setState({ topArtists: null })
    console.log('this.state', this.state);
    let accessToken = TokenService.getAuthToken();

    const BASE_URL = `https://api.spotify.com/v1/recommendations?seed_genres=${this.state.genreChoice}`;
    let FETCH_URL = BASE_URL;
   
    if (this.state.targetEnergy !== null) {
      FETCH_URL += `&target_energy=${this.state.targetEnergy}`;
    }
    if (this.state.targetValence !== null) {
      FETCH_URL += `&target_valence=${this.state.targetValence}`;
    }
    if (this.state.targetTempo !== null) {
      FETCH_URL += `&target_tempo=${this.state.targetTempo}`;
    }
    if (this.state.targetPopularity !== null) {
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
          let accessToken = TokenService.getAuthToken();
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

            return fetch(URL, myOptions)
            .then(res => (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
            .then(res=> {
              this.setState({ snapshot: res.snapshot_id});

            const URL= `${config.API_ENDPOINT}/playlists`
              const playlistBody= JSON.stringify({
                playlist_id: this.state.playlistId,
                user_id: this.state.id,
                energy: this.state.targetEnergy,
                valence: this.state.targetValence,
                tempo: this.state.targetTempo,
                popularity: this.state.targetPopularity
              });

              console.log(playlistBody);

              const myOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: playlistBody
              };

              return fetch(URL, myOptions)
              .then(res => (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
          .then(res => {
            console.log(`User playlist ${res.playlist_id} added`);

                })
              })
            })
          })
        })
      .catch(error => {
        // this.setState({error});
        console.log(error)
      })
  }

 handleArtistPlaylist = () => {
    this.setState({ genreChoice: null })
    const ARTISTS_URL = 'https://api.spotify.com/v1/me/top/artists?limit=5'
    let accessToken = TokenService.getAuthToken();
    
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
      // let parsed = queryString.parse(window.location.search);
      // let accessToken = parsed.access_token;
      let accessToken = TokenService.getAuthToken();

      if (this.state.targetEnergy !== null) {
        NEW_FETCH_URL += `&target_energy=${this.state.targetEnergy}`;
      }
      if (this.state.targetValence !== null) {
        NEW_FETCH_URL += `&target_valence=${this.state.targetValence}`;
      }
      if (this.state.targetTempo !== null) {
        NEW_FETCH_URL += `&target_tempo=${this.state.targetTempo}`;
      }
      if (this.state.targetPopularity !== null) {
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
          let accessToken = TokenService.getAuthToken();
          // let parsed = queryString.parse(window.location.search);
          // let accessToken = parsed.access_token;
          // const newDate = new Date();
          const playlistBody = JSON.stringify({ name: `Wind Chime: Top Artists ${this.state.weather.WeatherText}` })

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
            // let parsed = queryString.parse(window.location.search);
            // let accessToken = parsed.access_token;
            let accessToken = TokenService.getAuthToken();

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

            const URL= `${config.API_ENDPOINT}/playlists`
              const playlistBody= JSON.stringify({
                playlist_id: this.state.playlistId,
                user_id: this.state.id,
                energy: this.state.targetEnergy,
                valence: this.state.targetValence,
                tempo: this.state.targetTempo,
                popularity: this.state.popularity
              });

              console.log(playlistBody);

              const myOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: playlistBody
              };

              return fetch(URL, myOptions)
              .then(res => (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
          .then(res => {
            console.log(`User playlist ${res.playlist_id} added`);
              })
            })
          })
        })
      })
    })
    .catch(error => {
      // this.setState({error});
      console.log(error)
    })
  }

  handleSearchCity = (postalCode) => {
   
   fetch(`${config.API_ENDPOINT}/weather`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ postalCode })
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : this.setState({ weather: res.json() })
      })
      // .then(response => {
      //   console.log(response)
      // })
        // this.setState({ weather: res })
      // .then(res=> {
      //   console.log(res);
        // : this.setState({ weather: res })

          // if(this.state.IsDayTime === false) {
          //   this.setState({ targetValence: .4 })
          //   this.setState({ targetTempo: .4 })
          //   this.setState({ targetEnergy: .4 })
          // }
          //   this.setState({ targetValence: (1- (this.state.weather.CloudCover/100)) })
          //   this.setState({ targetEnergy: (1- (this.state.weather.CloudCover/100)) })
    }

  handleSetGenre = (genreChoice) => {
    this.setState({ genreChoice });
  }

  handleSetEnergy = (energyLevel) => {
    if (energyLevel !== null) {
    this.setState({ targetEnergy: Number(energyLevel) });
    } else {
      this.setState({ targetEnergy: null });
    }
  }

  handleSetValence = (valenceLevel) => {
    if (valenceLevel !== null) {
    this.setState({ targetValence: Number(valenceLevel) });
  } else {
    this.setState({ targetValence: null })
    }
  }

  handleSetTempo = (tempoLevel) => {
    if (tempoLevel !== null) {
      this.setState({ targetTempo: Number(tempoLevel) });
    } else {
      this.setState({ targetTempo: null })
      }
    }

  handleSetPopularity = (popularityLevel) => {
    if (popularityLevel !== null) {
      this.setState({ targetPopularity: Number(popularityLevel) });
    } else {
      this.setState({ targetPopularity: null })
      }
    }

  render() {
    console.log(this.state);
    let error = '';
    if (this.state.error) {
      error = this.state.error;
    }
    
  return (
    <div className="App">            
      {/* <header className="App__header">
          <Header />
      </header> */}
      <main className="App__main">
        <section>
          <Route 
          exact path={'/'}
          component={LandingPage} />

          <Route 
          exact path={'/redirect'}
          component={Redirect} />

          <Route 
          exact path={'/genreOption'}
          render={props => 
            <GenreOption
              setGenre={this.handleSetGenre}
              playlistId={this.state.playlistId} 
              snapshot={this.state.snapshot}
              getGenrePlaylist={this.handleGenrePlaylist}
              getArtistPlaylist={this.handleArtistPlaylist}
              weather={this.state.weather} 
              {...props}
              />} 
            />

          <Route 
          exact path={'/results'}
          render={props => 
            <Results
              playlistId={this.state.playlistId} 
              snapshot={this.state.snapshot}
              {...props}
              />} 
            />

          <Route 
          exact path={'/changeGenreParams'}
          render={props =>
            <ChangeGenreParams
              getGenrePlaylist={this.handleGenrePlaylist}
              getArtistPlaylist={this.handleArtistPlaylist}
              setEnergy={this.handleSetEnergy}
              targetEnergy={this.state.targetEnergy}
              setValence={this.handleSetValence}
              targetValence={this.state.targetValence}
              setTempo={this.handleSetTempo}
              targetTempo={this.state.targetTempo}
              setPopularity={this.handleSetPopularity}
              targetPopularity={this.state.targetPopularity}
              genreOption={this.state.genreChoice}
              topArtists={this.state.topArtists}
              {...props}
          />}
          />

          <Route 
          exact path={'/artistOption'}
          render={() => 
            <ArtistOption
              playlistId={this.state.playlistId} 
              snapshot={this.state.snapshot}
              getArtistPlaylist={this.handleArtistPlaylist}
              />} 
            />

          <Route 
          exact path={'/changeArtistParams'}
          render={() =>
            <ChangeArtistParams
              getArtistPlaylist={this.handleArtistPlaylist}
              setEnergy={this.handleSetEnergy}
              targetEnergy={this.state.targetEnergy}
              setValence={this.handleSetValence}
              targetValence={this.state.targetValence}
              setTempo={this.handleSetTempo}
              targetTempo={this.state.targetTempo}
              setPopularity={this.handleSetPopularity}
              targetPopularity={this.state.targetPopularity}
          />}
          />

          <Route 
          exact path={'/getWeather'}
          render={props => 
            <HomePage
            searchCity= {this.handleSearchCity} 
            weather={this.state.weather} 
            {...props}
            />}
            />

            <Route 
          exact path={'/playlists'}
          render={() => 
            <PastPlaylists
            id={this.state.id}
            />}
            />
          
        </section>
      </main>
    </div>
  );
  }
}

export default App;