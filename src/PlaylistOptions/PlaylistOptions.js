import React from 'react';
import Weather from '../Weather/Weather';
import Seed from '../Seed/Seed';

function PlaylistResults(props) {
  return (
    <div>
      <Weather searchCity={props.searchCity} weather={props.weather}/>
      <Seed targetValence={props.targetValence} targetTempo={props.targetTempo} targetPopularity={props.targetPopularity} targetEnergy={props.targetEnergy} setGenre={props.setGenre} getGenrePlaylist={props.getGenrePlaylist} setEnergy={props.setEnergy} setValence={props.setValence} setTempo={props.setTempo} setPopularity={props.setPopularity}/>
    </div>
  );
}

export default PlaylistResults;