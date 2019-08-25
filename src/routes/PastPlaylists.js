import React from 'react';
import Header from '../components/Header/Header';
import UserPlaylists from '../components/UserPlaylists/UserPlaylists';

export default class PastPlaylists extends React.Component {
  render() {
    return(
      <div>
        <div>
          <Header {...this.props}/>
        </div>
        <div className="App__main">
          <UserPlaylists {...this.props}/>
        </div>
      </div>
    )
  }
}