import React from 'react';
import Weather from '../Weather/Weather';
import SeedArtist from '../SeedArtist/SeedArtist';
import SeedGenre from '../SeedGenre/SeedGenre';
import ChangeParams from '../ChangeParams/ChangeParams';

function PlaylistResults(props) {
  return (
    <div>
      <Weather searchCity={props.searchCity} weather={props.weather}/>
      <SeedGenre setGenre={props.setGenre} getGenrePlaylist={props.getGenrePlaylist} />
      <SeedArtist getArtistPlaylist={props.getArtistPlaylist}/>
      <ChangeParams targetValence={props.targetValence} targetTempo={props.targetTempo} targetPopularity={props.targetPopularity} targetEnergy={props.targetEnergy} setGenre={props.setGenre} getGenrePlaylist={props.getGenrePlaylist} getArtistPlaylist={props.getArtistPlaylist} setEnergy={props.setEnergy} setValence={props.setValence} setTempo={props.setTempo} setPopularity={props.setPopularity}/>
    </div>
  );
}

export default PlaylistResults;