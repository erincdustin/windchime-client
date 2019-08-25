import React from 'react';
import ChangeParams from '../components/ChangeParams/ChangeParams';
import Header from '../components/Header/Header';

export default class ChangeGenreParams extends React.Component {
  render() {
    return(
      <div>
        <div>
          <Header {...this.props}/>
        </div>
        <div className="App__main">
          <ChangeParams {...this.props}/>
        </div>
      </div>
    )
  }
}