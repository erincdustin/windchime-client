import React from 'react';

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
        <div className="ribbon">
          <h3>Weather<span className="ribbon-text">{weather.Temperature.Imperial.Value} Degrees, {weather.WeatherText}</span></h3>
        </div>
  }

  return (
    <div>
      <div>{weatherResults}</div>
    </div>
  );
}

export default WeatherReading;