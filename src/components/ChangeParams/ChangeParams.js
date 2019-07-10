import React from 'react';
import './ChangeParams.css';

function ChangeParams(props) {

    const options = [
      null,
      .1,
      .2,
      .3,
      .4,
      .5,
      .6,
      .7,
      .8,
      .9,
      1
    ];

    //DRY up mapped parameter functions!
    const mappedTargetEnergy = options.map((energyOption, index) => {
      if (energyOption === null) {
        return <option key={index} value={null}>n/a</option>
      }
      return(
        <option key={index} value={energyOption}>{energyOption * 10}</option>
      )
    })
  
    const mappedTargetValence = options.map((valenceOption, index) => {
      if (valenceOption === null) {
        return <option key={index} value={null}>n/a</option>
      }
      return(
        <option key={index} value={valenceOption}>{valenceOption * 10}</option>
      )
    })
  
    const mappedTargetTempo = options.map((tempoOption, index) => {
      if (tempoOption === null) {
        return <option key={index} value={null}>n/a</option>
      }
      return(
        <option key={index} value={tempoOption}>{tempoOption * 10}</option>
      )
    })
  
    const mappedTargetPopularity = options.map((popularityOption, index) => {
      if (popularityOption === null) {
        return <option key={index} value={null}>n/a</option>
      }
      return(
        <option key={index} value={popularityOption * 100}>{popularityOption * 10}</option>
      )
    })

  return (
    <div className="change-params">
      <h4>Select Playlist Values Manually:</h4>
      <form>
        <span className="param">
        <label htmlFor="targetEnergy">Select Target Energy:</label>
        <select value={Math.floor(props.targetEnergy*10)/10} name="targetEnergy" onChange={event => props.setEnergy(event.target.value)}>{mappedTargetEnergy}</select>
        </span>
        <span className="param">
        <label htmlFor="targetValence">Select Target Happiness:</label>
        <select value={Math.floor(props.targetValence*10)/10} name="targetValence" onChange={event => props.setValence(event.target.value)}>{mappedTargetValence}</select>
        </span>
        <span className="param">
        <label htmlFor="targetTempo">Select Target Tempo:</label>
        <select value={Math.floor(props.targetTempo*10)/10} name="targetTempo" onChange={event => props.setTempo(event.target.value)}>{mappedTargetTempo}</select>
        </span>
        <span className="param">
        <label htmlFor="targetPopularity">Select Target Popularity:</label>
        <select value={Math.floor(props.targetPopularity*10)/10} name="targetPopularity" onChange={event => props.setPopularity(event.target.value)}>{mappedTargetPopularity}</select>
        </span>
      </form>
      <button className="btn mood center" onClick={()=> {
        if(props.genreOption){
        props.getGenrePlaylist();
        props.history.push('/results');
        }
        if(props.topArtists){
        props.getArtistPlaylist(); 
        props.history.push('/results')
        }
        }}>Make me a new playlist!</button>
    </div>
  );
}

export default ChangeParams;