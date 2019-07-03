import React from 'react';
import { Link } from 'react-router-dom'

function Weather(props) {
  let weather = {
    IsDayTime: null,
    Temperature: {
      Imperial: {
        Value: null,
      },
    HasPrecipitation: null,
    },
    CloudCover: null,
    PrecipitationType: null,
    WeatherText: null,
  }
  let weatherResults = '';

  if(props.weather !== null) {
    weather = props.weather;
    // let timeOfDay = '';
    // let precipitation = '';
    // (weather.IsDayTime === true) ? timeOfDay= <p>Daytime</p> : timeOfDay= <p>Nighttime</p>;
    // (weather.HasPrecipitation === true) ? precipitation= <p>{weather.PrecipitationType}</p> : precipitation='';
    
    weatherResults=  
        <div>
          <p>{weather.Temperature.Imperial.Value} Degrees</p>
          <p>{weather.WeatherText}</p>
        </div>
}
  let next='';

  return (
    <div>
      <h3>Find current weather conditions:</h3>
      <form id="weather-form" onSubmit={(e)=> {
            e.preventDefault();
            console.log(e.target.weatherInput.value);
            props.searchCity(e.target.weatherInput.value);
          }}>
        <input id="weatherInput" name="weatherInput" className="weatherInput" type="text" placeholder="Enter a zip code" required></input>
        <button className="btn btn-default" type="submit">Get Weather</button>
      </form>
      <br />
      <div>{weatherResults}</div>
      <button><Link to="/playlistSetup">Start making my playlist!</Link></button>
    </div>
  );
}

export default Weather;