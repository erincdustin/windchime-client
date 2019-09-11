import React from 'react';
import TokenService from '../../services/token-service';
import WindChimeContext from '../../contexts/windchime-context';

class WeatherReading extends React.Component {

  static contextType = WindChimeContext;

  renderWeather(){
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
    if(this.context.weather !== null) {
      weather = this.context.weather;
      imageUrl = `https://openweathermap.org/img/wn/${this.context.weather.weather[0].icon}@2x.png`
      
      weatherResults=  
          <div className="ribbon one">
            <div className="ribbon-header">Weather</div>
            <span className="ribbon-text">
            <span className="hidden">{Math.floor(weather.main.temp)}&deg;</span>
            <button className="btn weather" onClick={() => {
              TokenService.clearWeatherToken();
              this.props.history.push('/getWeather')
            }}>Change</button>
            </span>
            <img className="icon" src={imageUrl} alt="weather icon"></img>
          </div>
    }
    return weatherResults
  }

  render() {
    return (
      <div>
        <div>{this.renderWeather()}</div>
      </div>
    );
  }
}

export default WeatherReading;