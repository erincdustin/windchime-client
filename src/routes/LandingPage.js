import React from 'react';
import { Link } from 'react-router-dom'
// import PlaylistOptions from '../components/PlaylistOptions/PlaylistOptions';

export default class LandingPage extends React.Component {
  render() {
    return(
      <div>
        <h1>This is Wind Chime</h1>
        <button><a href="http://localhost:8888/login">Sign Into Spotify</a></button>
      </div>
    )
  }
}
