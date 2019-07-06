import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class Weather extends React.Component {

  render() {

  return (
    <div>
      <h3>Find current weather conditions:</h3>
      <form id="weather-form" onSubmit={(e)=> {
            e.preventDefault();
            this.props.searchCity(e.target.weatherInput.value);   
            this.props.history.push('/genreOption');  
          }}>
        <input id="weatherInput" name="weatherInput" className="weatherInput" type="text" placeholder="Enter a zip code" required></input>
        <button className="btn btn-default" type="submit">Get Weather</button>
      </form>
    </div>
  );
}
}

export default Weather;