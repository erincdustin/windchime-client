import React from 'react';

function SeedArtist(props) {
  return (
    <div>
      <h3>OR Use your Top Artists:</h3>
      <button onClick={()=> props.getArtistPlaylist()}>Go!</button>
    </div>
  );
}

export default SeedArtist;