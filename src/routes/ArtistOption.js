import React from 'react';
import Header from '../components/Header/Header';
import SeedArtist from '../components/SeedArtist/SeedArtist';
import PlaylistResults from '../components/PlaylistResults/PlaylistResults';
import { Link } from 'react-router-dom';

export default class ArtistOption extends React.Component {
  render() {
    return(
      <div>
        <Header {...this.props}/>
        <SeedArtist getArtistPlaylist={this.props.getArtistPlaylist} />
        <PlaylistResults playlistId={this.props.playlistId} snapshot={this.props.snapshot}/>
        <h3>Don't like this playlist?</h3>
        <button><Link to="/changeArtistParams">Change the mood</Link></button>
      </div>
    )
  }
}