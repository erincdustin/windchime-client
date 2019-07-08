import React from 'react';
import Weather from '../components/Weather/Weather';
import Header from '../components/Header/Header';
import WeatherReading from '../components/WeatherReading/WeatherReading';

export default class Homepage extends React.Component {
  render() {
    return(
      <div className="App">
        <div>
          <Header />
        </div>
        <div className="App__main">
          <WeatherReading weather={this.props.weather}/>
          <Weather searchCity={this.props.searchCity} weather={this.props.weather} {...this.props}/>
        </div>
      </div>
    )
  }
}
