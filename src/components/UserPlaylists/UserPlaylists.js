import React from 'react';
import Playlist from './Playlist/Playlist';
import testData from '../../dummy-data';

function UserPlaylists(props) {

  const mappedPlaylists = testData.map(playlist => {
    return (
     <div>
       <Playlist props={playlist.playlist_id}/>
     </div>
    );
  })

  return (
    <div >
      <h3>Playlist Results:</h3>
      {mappedPlaylists}
    </div>
  );
}

export default UserPlaylists;