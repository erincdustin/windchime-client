import React from 'react';
import config from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import screenshot from '../images/playlist.PNG'

export default class LandingPage extends React.Component {
  render() {
    return(
      <div className="container__centered">
        <h1 className="wind-chime__text">Wind Chime <FontAwesomeIcon className='blue' icon='wind' /></h1>
        <h4 className="text-container">Make playlists that match the weather!  <br/><br/>
          Wind Chime uses current weather conditions to manipulate Spotify's recommendations algorithm, 
          providing you with a custom playlist that fits the weather "mood".  Choose from a list of genres 
          or your top Spotify artists to seed the playlist.</h4>
        <img src={screenshot} className="image" alt="screenshot of app"></img>
   
        <section className="demo-credentials">
          <h5>Demo Credentials</h5>
          <h6><span className="blue bold">Email:</span> wind.chime.app@gmail.com</h6>
          <h6><span className="blue bold">Spotify password:</span> windchime123</h6>
        </section>
        <button className="btn sign-in"><a className="link" href={config.AUTH_ENDPOINT}>Sign Into Spotify</a></button>
      </div>
    )
  }
}