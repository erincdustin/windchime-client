import React from 'react';
import PlaylistResults from '../components/PlaylistResults/PlaylistResults';
import Header from '../components/Header/Header';
import WeatherReading from '../components/WeatherReading/WeatherReading';
import PlaylistOption from '../components/PlaylistOption/PlaylistOption';
import TokenService from '../services/token-service';

export default class Results extends React.Component {

  state = {
    error: ''
  }

  componentDidMount() {
    if(!TokenService.hasWeatherToken()) {
      this.props.history.push('/getWeather');
    }
    if(TokenService.hasWeatherToken() && !TokenService.hasGenreToken()) {
      this.props.history.push('/genreOption');
    }

    if(TokenService.hasWeatherToken() && TokenService.hasGenreToken() && !TokenService.hasPlaylistToken()) {
      this.setState({error: 'Something went wrong. Please pick another playlist option and try again.'});
    }

    if(TokenService.hasWeatherToken() && TokenService.hasGenreToken() && TokenService.hasPlaylistToken()) {
      this.setState({error: ''})
    }

  }

  render() {
    return(
      <div>
        <div>
          <Header {...this.props}/>
        </div>
        <div className="App__main">
          <WeatherReading weather={this.props.weather}/>
          <PlaylistOption genreOption={this.props.genreOption} topArtists={this.props.topArtists} {...this.props}/>
          <PlaylistResults errorMessage={this.state.error} weather={this.props.weather} playlistId={this.props.playlistId} snapshot={this.props.snapshot}/>
        </div>
      </div>
    )
  }
}