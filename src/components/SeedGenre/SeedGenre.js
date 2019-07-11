import React from 'react';
import GenreList from '../../GenreList';
import './SeedGenre.css'
import TokenService from '../../services/token-service';

function SeedGenre(props) {

  const mappedGenres = GenreList.map((genre, index) => {
    return(
      <span className="genre-list" key={index}>
        <button 
        value={genre}
        onClick={async (e) =>{
          await props.setGenre(e.target.value);
          await props.getGenrePlaylist();
          await TokenService.saveGenreToken('genre');
          await props.history.push('/results');
        }}
        className="btn genre" type="button">{genre}</button>
      </span>)
    });

  return (
    <div>
      <div className="ribbon two"><div className="ribbon-header">Playlist Options</div></div>
      <span className="center">
          <button className="inline btn artist orange" onClick={async ()=> {
            await TokenService.saveGenreToken('top artists');
            await props.getArtistPlaylist();
            await props.history.push('/results');
            }}>Use My Top Artists!</button>
      <h4>OR Pick a genre:</h4>
      <div className="mapped-genres">{mappedGenres}</div>
      </span>
    </div>
  );
}

export default SeedGenre;