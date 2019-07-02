import React from 'react';

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