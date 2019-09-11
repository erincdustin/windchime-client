import TokenService from './token-service';
import config from '../config';

const WindChimeApiService = {

  getUser() { 
    const USER_URL = 'https://api.spotify.com/v1/me';
    const accessToken = TokenService.getAuthToken();
    const myOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };

    return fetch(USER_URL, myOptions)
      .then(res => (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
        .then(data => {
          return data
      })
  },

  findStoredUser() { 
    const URL = `${config.API_ENDPOINT}/users`;

    return fetch(URL)
      .then(res => (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
        .then(data => {
          return data
      })
  },

  postUser(id) {
    const URL= `${config.API_ENDPOINT}/users`
    const userBody= JSON.stringify({ id })
    const myOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: userBody
      };

      return fetch(URL, myOptions)
        .then(res => (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
          )
          .then(data => {
            return data
        })
  },

  getUserArtists() { 
    const ARTISTS_URL = 'https://api.spotify.com/v1/me/top/artists?limit=5'
    const accessToken = TokenService.getAuthToken();

    const myOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };

    return fetch(ARTISTS_URL, myOptions)
      .then(res => (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
      )
      .then(data => {
        return data
    })
  },

  getArtistTracks(artists, energy, valence, tempo, popularity) {
    const NEW_BASE_URL = `https://api.spotify.com/v1/recommendations?seed_artists=${artists}`;
    let FETCH_URL = NEW_BASE_URL;
    let accessToken = TokenService.getAuthToken();

      if (energy !== null) {
        FETCH_URL += `&target_energy=${energy}`;
      }
      if (valence !== null) {
        FETCH_URL += `&target_valence=${valence}`;
      }
      if (tempo !== null) {
        FETCH_URL += `&target_tempo=${tempo}`;
      }
      if (popularity !== null) {
        FETCH_URL += `&target_popularity=${popularity}`;
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

      return fetch(FETCH_URL, myOptions)
        .then(res => (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
            )
            .then(data => {
              return data
          }) 
  },

  getGenreTracks(genre, energy, valence, tempo, popularity) {
    let accessToken = TokenService.getAuthToken();
    const BASE_URL = `https://api.spotify.com/v1/recommendations?seed_genres=${genre}`;
    let FETCH_URL = BASE_URL;
   
    if (energy !== null) {
      FETCH_URL += `&target_energy=${energy}`;
    }
    if (valence !== null) {
      FETCH_URL += `&target_valence=${valence}`;
    }
    if (tempo !== null) {
      FETCH_URL += `&target_tempo=${tempo}`;
    }
    if (popularity !== null) {
      FETCH_URL += `&target_popularity=${popularity}`;
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

    return fetch(FETCH_URL, myOptions)
      .then(res => (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
        .then(data => {
          return data
      }) 
  },

  makeArtistsPlaylist(id, weather) {
    const PLAYLIST_URL = `https://api.spotify.com/v1/users/${id}/playlists`;
    let accessToken = TokenService.getAuthToken();
    const playlistBody = JSON.stringify({ name: `Wind Chime: top artists, ${(weather.weather[0].description).toLowerCase()}` })

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
        .then(data => {
          return data
      })
  },

  makeGenrePlaylist(id, genre, weather) {
    const PLAYLIST_URL = `https://api.spotify.com/v1/users/${id}/playlists`;
    const accessToken = TokenService.getAuthToken();
    const playlistBody = JSON.stringify({ name: `Wind Chime: ${genre}, ${(weather.weather[0].description).toLowerCase()}` })

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
          .then(data => {
            return data
        })
  },

  setSongs(playlistId, mappedSongs) {
    const accessToken = TokenService.getAuthToken();
    const URL = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${mappedSongs}`;

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
        .then(data => {
          return data
      })
  },

  savePlaylist(playlistBody) {
    const URL= `${config.API_ENDPOINT}/playlists`

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
        .then(data => {
          return data
      })
  },

  getPlaylists() {
    const URL = `${config.API_ENDPOINT}/playlists`;

    return fetch(URL)
    .then(res => (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
        .then(data => {
          return data
      })
  },

  getWeather(postalCode) {
    const myOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ postalCode })
    }
    return fetch(`${config.API_ENDPOINT}/weather`, myOptions)
      .then(res => (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
          )
          .then(data => {
            return data
        })
  }
}

export default WindChimeApiService