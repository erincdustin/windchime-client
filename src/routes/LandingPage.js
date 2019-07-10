import React from 'react';
import config from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PlaylistOptions from '../components/PlaylistOptions/PlaylistOptions';

export default class LandingPage extends React.Component {
  render() {
    return(
      <div className="container__centered">
        <h1 className="wind-chime__text">Wind Chime <FontAwesomeIcon className='blue' icon='wind' /></h1>
        <h4 className="text-container">Make playlists that match the weather!  <br/><br/>
        Wind Chime combines the current weather conditions with a genre of your choice to make a custom Spotify playlist that fits the mood of the weather. </h4>
        <button className="btn sign-in"><a className="link" href={config.AUTH_ENDPOINT}>Sign Into Spotify</a></button>
      </div>
    )
  }
}