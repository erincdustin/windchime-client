import React from 'react';
import Header from '../components/Header/Header';
import SeedArtist from '../components/SeedArtist/SeedArtist';
import PlaylistResults from '../components/PlaylistResults/PlaylistResults';

export default class ArtistOption extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <SeedArtist getArtistPlaylist={this.props.getArtistPlaylist} />
        <PlaylistResults playlistId={this.props.playlistId} snapshot={this.props.snapshot}/>
      </div>
    )
  }
}