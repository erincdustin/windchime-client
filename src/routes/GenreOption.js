import React from 'react';
import Header from '../components/Header/Header';
import SeedGenre from '../components/SeedGenre/SeedGenre';
import WeatherReading from '../components/WeatherReading/WeatherReading';
import PlaylistOption from '../components/PlaylistOption/PlaylistOption';

export default class GenreOption extends React.Component {
  render() {
    return(
      <div>
        <div>
          <Header />
        </div>
        <div className="App__main">
          <WeatherReading weather={this.props.weather}/>
          {/* <PlaylistOption genreOption={this.props.genreOption} topArtists={this.props.topArtists}/> */}
          <SeedGenre weather={this.props.weather} setGenre={this.props.setGenre} getGenrePlaylist={this.props.getGenrePlaylist} {...this.props}/>
        </div>
      </div>
    )
  }
}