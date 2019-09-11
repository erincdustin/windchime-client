import React from 'react';
import PlaylistResults from '../components/PlaylistResults/PlaylistResults';
import Header from '../components/Header/Header';
import WeatherReading from '../components/WeatherReading/WeatherReading';
import PlaylistOption from '../components/PlaylistOption/PlaylistOption';
import TokenService from '../services/token-service';

export default class Results extends React.Component {

  componentDidMount() {
    if(!TokenService.hasWeatherToken()) {
      this.props.history.push('/getWeather');
    }
    if(TokenService.hasWeatherToken() && !TokenService.hasGenreToken()) {
      this.props.history.push('/genreOption');
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
          <PlaylistOption {...this.props}/>
          <PlaylistResults />
        </div>
      </div>
    )
  }
}