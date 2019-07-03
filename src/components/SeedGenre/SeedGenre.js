import React from 'react';
import GenreList from '../../GenreList';

function SeedGenre(props) {

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
      <h3>Pick a Genre:</h3>
      <div>{mappedGenres}</div>
      <h3> </h3>
      <button onClick={()=> props.getGenrePlaylist()}>Go!</button>
    </div>
  );
}

export default SeedGenre;