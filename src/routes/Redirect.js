import React from 'react';
import queryString from 'query-string';
import TokenService from '../services/token-service';

export default class Redirect extends React.Component {

  constructor(props) {
    //Saving auth token form Spotify auth server to local
    // storage and redirecting to homepage
    super (props);
    let parsed = queryString.parse(window.location.search);
    let TOKEN_KEY = parsed.access_token;
    TokenService.saveAuthToken(TOKEN_KEY);
    props.history.push('/getWeather')
  }

  render() {
    return(
      <div>
        Please wait...
      </div>
    )
  }
}