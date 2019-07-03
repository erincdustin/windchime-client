import React from 'react';
import Header from '../components/Header/Header';
import SeedGenre from '../components/SeedGenre/SeedGenre';
import PlaylistResults from '../components/PlaylistResults/PlaylistResults';

export default class GenreOption extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <SeedGenre setGenre={this.props.setGenre} getGenrePlaylist={this.props.getGenrePlaylist} />
        <PlaylistResults playlistId={this.props.playlistId} snapshot={this.props.snapshot}/>
      </div>
    )
  }
}