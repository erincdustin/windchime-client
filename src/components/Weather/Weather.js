import React from 'react';
import './Weather.css';
import TokenService from '../../services/token-service';

class Weather extends React.Component {

  render() {

  return (
    <div>
      <div className="ribbon one"><div className="ribbon-header">Weather</div></div>
      <form id="weather-form" onSubmit={(e)=> {
            e.preventDefault();
            this.props.searchCity(e.target.weatherInput.value);
            TokenService.saveWeatherToken(e.target.weatherInput.value);   
            this.props.history.push('/genreOption');  
          }}>
        <h4>Find current conditions:</h4>
        <input className="input" id="weatherInput" name="weatherInput" type="text" placeholder="Enter a zip code" required></input>
        <button className="btn btn-default" type="submit" >Get Weather</button>
      </form>
    </div>
  );
}
}

export default Weather;