import React from 'react';
import Header from '../components/Header/Header';
import UserPlaylists from '../components/UserPlaylists/UserPlaylists';

export default class PastPlaylists extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <UserPlaylists id={this.props.id} />
      </div>
    )
  }
}