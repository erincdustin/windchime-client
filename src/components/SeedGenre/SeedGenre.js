import React from 'react';
import GenreList from '../../GenreList';
import { Link } from 'react-router-dom';

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
      <button><Link to="/playlistSetup">Back to Playlist Options</Link></button>
      <button><Link to="/getWeather">Start Over</Link></button>
    </div>
  );
}

export default SeedGenre;