import React from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';

function WeatherReading(props) {
  let imageUrl = '';

  let weather = {
    main: {
      temp: ''
    },
    weather: [{
      icon: '',
      id: '',
      main: '',
      description: ''
    }]
  }
  let weatherResults = '';

  if(props.weather !== null) {
    weather = props.weather;
    imageUrl = `http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`
    console.log(imageUrl);
    
    weatherResults=  
        <div className="ribbon one">
          <div className="ribbon-header">Weather</div>
          <span className="ribbon-text">
          <span className="hidden">{Math.floor(weather.main.temp)}&deg;</span>
          {/* <button class="btn weather"><Link className="link" to="/getWeather">Change</Link></button> */}
          <button class="btn weather" onClick={() => {
            TokenService.clearWeatherToken();
            props.history.push('/getWeather')
          }}>Change</button>
          </span>
          <img className="icon" src={imageUrl} alt="weather icon"></img>
        </div>
  }

  return (
    <div>
      <div>{weatherResults}</div>
    </div>
  );
}

export default WeatherReading;