import React from 'react';
import Header from '../components/Header/Header';
import SeedGenre from '../components/SeedGenre/SeedGenre';
import WeatherReading from '../components/WeatherReading/WeatherReading';
import TokenService from '../services/token-service';

export default class GenreOption extends React.Component {

  componentDidMount() {
    if(!TokenService.hasWeatherToken()) {
      this.props.history.push('/getWeather');
    }
  }

  render() {
    return(
      <div>
        <div>
          <Header {...this.props}/>
        </div>
        <div className="App__main">
          <WeatherReading {...this.props}/>
          <SeedGenre {...this.props}/>
        </div>
      </div>
    )
  }
}