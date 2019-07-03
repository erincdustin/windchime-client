import React from 'react';
import Weather from '../components/Weather/Weather';
import Header from '../components/Header/Header';
// import PlaylistOptions from '../components/PlaylistOptions/PlaylistOptions';

export default class Homepage extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Weather searchCity={this.props.searchCity} weather={this.props.weather}/>
      </div>
    )
  }
}
