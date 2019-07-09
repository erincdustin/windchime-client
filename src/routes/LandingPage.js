import React from 'react';
import config from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PlaylistOptions from '../components/PlaylistOptions/PlaylistOptions';

export default class LandingPage extends React.Component {
  render() {
    return(
      <div className="container__centered">
        <h1 className="wind-chime__text">Wind Chime <FontAwesomeIcon className='blue' icon='wind' /></h1>
        <p className="text-container">Listen to playlists that fit the mood of the weather!  <br/><br/>
        Wind Chime give you the option to use your top artists or pick a specific genre to fit your music tastes. </p>
        <button className="btn sign-in"><a className="link" href={config.AUTH_ENDPOINT}>Sign Into Spotify</a></button>
      </div>
    )
  }
}