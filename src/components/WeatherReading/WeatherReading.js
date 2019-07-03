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
      <p>{weatherResults}</p>
    </div>
  );
}

export default WeatherReading;