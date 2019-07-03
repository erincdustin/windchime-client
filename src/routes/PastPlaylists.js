import React from 'react';
// import { Link } from 'react-router-dom'
import SeedGenre from '../components/SeedGenre/SeedGenre';
import UserPlaylists from '../components/UserPlaylists/UserPlaylists';

export default class PastPlaylists extends React.Component {
  render() {
    return(
      <div>
        <UserPlaylists id={this.props.id} />
      </div>
    )
  }
}