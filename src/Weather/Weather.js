import React from 'react';

function Weather(props) {
  let weather = {
    Temperature: {
      Metric: {
        Value: null,
      },
    HasPrecipitation: null,
    },
    CloudCover: null,
    PrecipitationType: null,
  }

  if(props.weather !== null) {
    weather = props.weather;
  }
  return (
    <div>
      <h3>Find current weather conditions:</h3>
      <span className="weather-btn">
          <button 
          onClick={()=> props.searchWeather()}
            className="btn btn-default" type="button">Get Weather</button>
      </span>
      <br />
      <div>Temp: {((weather.Temperature.Metric.Value) * (9/5)) + 32} degrees, 
            Precipitation: {weather.HasPrecipitation}, 
            Cloud Cover: {weather.CloudCover}, 
            PrecipitationType: {weather.PrecipitationType}
      </div>
    </div>
  );
}

export default Weather;