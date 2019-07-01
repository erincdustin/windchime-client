import React from 'react';
import Weather from '../Weather/Weather';
import Seed from '../Seed/Seed';

function PlaylistResults(props) {
  return (
    <div>
      <Weather searchWeather={props.searchWeather} weather={props.weather}/>
      <Seed />
    </div>
  );
}

export default PlaylistResults;