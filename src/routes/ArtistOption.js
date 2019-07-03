import React from 'react';
// import { Link } from 'react-router-dom'
import SeedArtist from '../components/SeedArtist/SeedArtist';
import PlaylistResults from '../components/PlaylistResults/PlaylistResults';

export default class ArtistOption extends React.Component {
  render() {
    return(
      <div>
        <SeedArtist getArtistPlaylist={this.props.getArtistPlaylist} />
        <PlaylistResults playlistId={this.props.playlistId} snapshot={this.props.snapshot}/>
      </div>
    )
  }
}