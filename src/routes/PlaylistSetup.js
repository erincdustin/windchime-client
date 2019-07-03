import React from 'react';
import { Link } from 'react-router-dom'
// import PlaylistOptions from '../components/PlaylistOptions/PlaylistOptions';

export default class LandingPage extends React.Component {
  render() {
    return(
      <div>
        <h2>Choose an option:</h2>
        <button><Link to="/genreOption">Pick a genre</Link></button>
        <button><Link to="/artistOption">Use my top artists</Link></button>
        <button><Link to="/getWeather">Back to Weather</Link></button>
      </div>
    )
  }
}