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
          <ChangeParams setEnergy={this.props.setEnergy}
                targetEnergy={this.props.targetEnergy}
                setValence={this.props.setValence}
                targetValence={this.props.targetValence}
                setTempo={this.props.setTempo}
                targetTempo={this.props.targetTempo}
                setPopularity={this.props.setPopularity}
                targetPopularity={this.props.targetPopularity}
                getGenrePlaylist={this.props.getGenrePlaylist}
                getArtistPlaylist={this.props.getArtistPlaylist}
                topArtists={this.props.topArtists}
                genreOption={this.props.genreOption}
                {...this.props}/>
        </div>
      </div>
    )
  }
}