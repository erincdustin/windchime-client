import React from 'react';
import GenreList from '../../GenreList';
import { Link } from 'react-router-dom';

function SeedGenre(props) {
  let weather = {
    IsDayTime: null,
    Temperature: {
      Imperial: {
        Value: null,
      },
    HasPrecipitation: null,
    },
    CloudCover: null,
    PrecipitationType: null,
    WeatherText: null,
  }
  let weatherResults = '';

  if(props.weather !== null) {
    weather = props.weather;
    
    weatherResults=  
        <div>
          <h3>Weather:</h3>
          <p>{weather.Temperature.Imperial.Value} Degrees, {weather.WeatherText}</p>
        </div>
  }

  const mappedGenres = GenreList.map((genre, index) => {
    return(
      <span className="genre-btn" key={index}>
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
      <div>{weatherResults}</div>
      <h3>Use Top Artists OR Pick a Genre:</h3>
      <button onClick={()=> {
        props.getArtistPlaylist();
        props.history.push('/results');
        }}>Use my Top Artists!</button>
      <div>{mappedGenres}</div>
      <h3> </h3>
      <button><Link to="/getWeather">Back</Link></button>
    </div>
  );
}

export default SeedGenre;