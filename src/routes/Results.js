import React from 'react';
import ChangeParams from '../components/ChangeParams/ChangeParams';
import PlaylistResults from '../components/PlaylistResults/PlaylistResults';
import Header from '../components/Header/Header';

export default class Results extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <PlaylistResults playlistId={this.props.playlistId} snapshot={this.props.snapshot}/>
      </div>
    )
  }
}