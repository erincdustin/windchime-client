
const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem("auth-key", token);
  },
  getAuthToken() {
    return window.localStorage.getItem("auth-key")
  },
  clearAuthToken() {
    window.localStorage.removeItem("auth-key")
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },

  saveWeatherToken(token) {
    window.localStorage.setItem("weather", token)
  },
  getWeatherToken() {
    return window.localStorage.getItem("weather")
  },
  clearWeatherToken() {
    window.localStorage.removeItem("weather")
  },
  hasWeatherToken() {
    return !!TokenService.getWeatherToken()
  },

  saveGenreToken(token) {
    window.localStorage.setItem("genre", token)
  },
  getGenreToken() {
    return window.localStorage.getItem("genre")
  },
  clearGenreToken() {
    window.localStorage.removeItem("genre")
  },
  hasGenreToken() {
    return !!TokenService.getGenreToken()
  },

  savePlaylistToken(token) {
    window.localStorage.setItem("playlist", token)
  },
  getPlaylistToken() {
    return window.localStorage.getItem("playlist")
  },
  clearPlaylistToken() {
    window.localStorage.removeItem("playlist")
  },
  hasPlaylistToken() {
    return !!TokenService.getPlaylistToken()
  },
}

export default TokenService;