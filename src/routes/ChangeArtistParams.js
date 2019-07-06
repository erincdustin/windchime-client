import React from 'react';
import ChangeParams from '../components/ChangeParams/ChangeParams';
import Header from '../components/Header/Header';

export default class ChangeArtistParams extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <ChangeParams setEnergy={this.props.handleSetEnergy}
              targetEnergy={this.props.targetEnergy}
              setValence={this.props.handleSetValence}
              targetValence={this.props.targetValence}
              setTempo={this.props.handleSetTempo}
              targetTempo={this.props.targetTempo}
              setPopularity={this.props.handleSetPopularity}
              targetPopularity={this.props.targetPopularity}
              getGenrePlaylist={this.handleGenrePlaylist}/>
        <button onClick={()=> this.props.getArtistPlaylist()}>Go!</button>
      </div>
    )
  }
}