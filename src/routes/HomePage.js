import React from 'react';
import Weather from '../components/Weather/Weather';
import Header from '../components/Header/Header';

export default class Homepage extends React.Component {
  render() {
    return(
      <div className="App">
        <div>
          <Header {...this.props}/>
        </div>
        <div className="App__main">
          <Weather {...this.props}/>
        </div>
      </div>
    )
  }
}
