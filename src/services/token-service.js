
import queryString from 'query-string';
let parsed = queryString.parse(window.location.search);
let TOKEN_KEY = parsed.access_token;

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
}

export default TokenService;