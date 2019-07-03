import React from 'react';
// import { Link } from 'react-router-dom'
import SeedGenre from '../components/SeedGenre/SeedGenre';
import PlaylistResults from '../components/PlaylistResults/PlaylistResults';

export default class GenreOption extends React.Component {
  render() {
    return(
      <div>
        <SeedGenre setGenre={this.props.setGenre} getGenrePlaylist={this.props.getGenrePlaylist} />
        <PlaylistResults playlistId={this.props.playlistId} snapshot={this.props.snapshot}/>
      </div>
    )
  }
}