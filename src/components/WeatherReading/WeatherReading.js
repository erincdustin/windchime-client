import React from 'react';
import {Link} from 'react-router-dom';

function WeatherReading(props) {
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
    
    weatherResults=  
        <div className="ribbon one">
          <div className="ribbon-header">Weather</div>
          <span className="ribbon-text">
          <span className="hidden">{weather.Temperature.Imperial.Value}&deg;, {weather.WeatherText}</span>
          <button class="btn weather"><Link className="link" to="/getWeather">Change</Link></button>
          </span>
        </div>
  }

  return (
    <div>
      <div>{weatherResults}</div>
    </div>
  );
}

export default WeatherReading;