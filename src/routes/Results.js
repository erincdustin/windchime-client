import React from 'react';
import PlaylistResults from '../components/PlaylistResults/PlaylistResults';
import Header from '../components/Header/Header';
import WeatherReading from '../components/WeatherReading/WeatherReading';
import PlaylistOption from '../components/PlaylistOption/PlaylistOption';

export default class Results extends React.Component {
  render() {
    return(
      <div>
        <div>
          <Header />
        </div>
        <div className="App__main">
          <WeatherReading weather={this.props.weather}/>
          <PlaylistOption genreOption={this.props.genreOption} topArtists={this.props.topArtists}/>
          <PlaylistResults weather={this.props.weather} playlistId={this.props.playlistId} snapshot={this.props.snapshot}/>
        </div>
      </div>
    )
  }
}