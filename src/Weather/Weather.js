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
  let weatherResults = '';

  if(props.weather !== null) {
    weather = props.weather;
    if (weather.HasPrecipitation === true) {
      weatherResults=  
        <div>
          <p>{Math.round(((weather.Temperature.Metric.Value) * (9/5)) + 32)} Degrees</p>
          <p>{weather.CloudCover}% Cloud Cover</p>
          <p>{weather.PrecipitationType}</p>
        </div>
  }
  weatherResults=  
        <div>
          <p>{Math.round(((weather.Temperature.Metric.Value) * (9/5)) + 32)} Degrees</p>
          <p>{weather.CloudCover}% Cloud Cover</p>
        </div>
}

  return (
    <div>
      <h3>Find current weather conditions:</h3>
      <form id="weather-form" onSubmit={(e)=> {
            e.preventDefault();
            console.log(e.target.weatherInput.value);
            props.searchCity(e.target.weatherInput.value);
          }}>
        <input id="weatherInput" name="weatherInput" className="weatherInput" type="text" placeholder="12345"></input>
        <button className="btn btn-default" type="submit">Get Weather</button>
      </form>
      <br />
      <div>{weatherResults}</div>
    </div>
  );
}

export default Weather;