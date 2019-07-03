import React from 'react';
import Playlist from '../Playlist/Playlist';
import testData from '../../dummy-data';

function UserPlaylists(props) {

  const mappedPlaylists = testData.filter(playlist => playlist.user_id === props.id).map(playlist => {
    return (
     <div>
       <Playlist playlistId={playlist.playlist_id}/>
     </div>
    );
  });
  // const mappedPlaylists = testData.filter(playlist => playlist.user_id === props.id).map(playlist => 'hello');
  if (!props.id) {
    return (<div><h3>No past playlists</h3></div>)
  }
  return (
    <div >
      <h3>Playlist Results:</h3>
      {mappedPlaylists}
    </div>
  );
}

export default UserPlaylists;