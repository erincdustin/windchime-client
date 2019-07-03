import config from '../config'

const PlaylistApiService = {
  getPlaylists() {
    return fetch(`${config.API_ENDPOINT}/playlists`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getPlaylist(playlistId) {
    return fetch(`${config.API_ENDPOINT}/playlists/${playlistId}`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postPlaylist(userId, playlistId, energy, valence, tempo, popularity) {
    return fetch(`${config.API_ENDPOINT}/playlists`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        playlist_id: playlistId,
        energy,
        valence,
        tempo,
        popularity
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default PlaylistApiService;
