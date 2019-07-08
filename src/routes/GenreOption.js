import React from 'react';
import Header from '../components/Header/Header';
import SeedGenre from '../components/SeedGenre/SeedGenre';

export default class GenreOption extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <SeedGenre  weather={this.props.weather} setGenre={this.props.setGenre} getGenrePlaylist={this.props.getGenrePlaylist} {...this.props}/>
        {/* <PlaylistResults playlistId={this.props.playlistId} snapshot={this.props.snapshot}/> */}
      </div>
    )
  }
}