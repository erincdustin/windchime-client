import React from 'react';
import GenreList from '../../GenreList';
import { Link } from 'react-router-dom';
import './SeedGenre.css'

function SeedGenre(props) {

  const mappedGenres = GenreList.map((genre, index) => {
    return(
      <span className="genre-list" key={index}>
        <button 
        value={genre}
        onClick={async (e) =>{
          try {
          console.log(e.target.value);
          await props.setGenre(e.target.value);
          await props.getGenrePlaylist();
          await props.history.push('/results');
          } catch(err) {
            console.log(err)
          }
        }}
        className="genre-btn" type="button">{genre}</button>
      </span>)
    });

  return (
    <div>
      <h3 className="ribbon two">Playlist Options</h3>
      <span className="center">
          <button className="inline" onClick={()=> {
            props.getArtistPlaylist();
            props.history.push('/results');
            }}>Use My Top Artists!</button>
      <h4>OR Pick a genre:</h4>
      <div className="mapped-genres">{mappedGenres}</div>
      <button className="btn-default btn"><Link className="link" to="/getWeather">Back</Link></button>
      </span>
    </div>
  );
}

export default SeedGenre;