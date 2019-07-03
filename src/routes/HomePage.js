import React from 'react';
import Weather from '../components/Weather/Weather';
// import PlaylistOptions from '../components/PlaylistOptions/PlaylistOptions';

export default class Homepage extends React.Component {
  render() {
    return(
      <div>
        <Weather searchCity={this.props.searchCity} weather={this.props.weather}/>
      </div>
    )
  }
}
