import React from 'react';
import GenreList from '../GenreList';

function Seed(props) {

  const mappedGenres = GenreList.map((genre, index) => {
    return(
      <span className="genre-btn" key={index}>
        <button 
        value={genre}
        onClick={(e) =>{
          console.log(e.target.value)
          props.setGenre(e.target.value)
        }}
        className="genre-btn" type="button">{genre}</button>
      </span>)
    });

  return (
    <div>
      <br></br>
      <h3>Set Playlist Options:</h3>
      {mappedGenres}
      <br></br>
      <button onClick={()=> props.getGenrePlaylist()}>Get Playlist!</button>
    </div>
  );
}

export default Seed;