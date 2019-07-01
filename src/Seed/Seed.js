import React from 'react';
import GenreList from '../GenreList';

function Seed(props) {

  const mappedGenres = GenreList.map((genre, index) => {
    return(
      <span className="genre-btn" key={index}>
        <button 
        value={genre}
        onClick={(e) =>{
          console.log(e.target.value)
          props.setGenre(e.target.value)
        }}
        className="genre-btn" type="button">{genre}</button>
      </span>)
    });

    const options = [
      '',
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

    const mappedTargetEnergy = options.map((energyOption, index) => {
      if (energyOption === '') {
        return <option key={index} value={''}>n/a</option>
      }
      return(
        <option key={index} value={energyOption}>{energyOption * 10}</option>
      )
    })
  
    // const mappedTargetValence = options.map((valenceOption, index) => {
    //   if (valenceOption === '') {
    //     return <option key={index} value={''}>n/a</option>
    //   }
    //   return(
    //     <option key={index} value={valenceOption}>{valenceOption * 10}</option>
    //   )
    // })
  
    // const mappedTargetTempo = options.map((tempoOption, index) => {
    //   if (tempoOption === '') {
    //     return <option key={index} value={''}>n/a</option>
    //   }
    //   return(
    //     <option key={index} value={tempoOption}>{tempoOption * 10}</option>
    //   )
    // })
  
    // const mappedTargetPopularity = options.map((popularityOption, index) => {
    //   if (popularityOption === '') {
    //     return <option key={index} value={''}>n/a</option>
    //   }
    //   return(
    //     <option key={index} value={popularityOption * 100}>{popularityOption * 10}</option>
    //   )
    // })

  return (
    <div>
      <h3>Set Playlist Options:</h3>
      <div>{mappedGenres}</div>
      <h3>Select Playlist Values Manually:</h3>
      <label htmlFor="targetEnergy">Select Target Energy:</label>
      <select name="targetEnergy" onChange={event => {
        console.log(event.target.value);
        props.setEnergy(event.target.value);
      }}>
        {mappedTargetEnergy}
      </select>
      {/* <label htmlFor="targetValence">Select Target Happiness:</label>
      <select name="targetValence" onChange={event => { this.setState({ targetValence: Number(event.target.value) }) }}>{mappedTargetValence}</select>
      <label htmlFor="targetTempo">Select Target Tempo:</label>
      <select name="targetTempo" onChange={event => { this.setState({ targetTempo: Number(event.target.value) }) }}>{mappedTargetTempo}</select>
      <label htmlFor="targetPopularity">Select Target Popularity:</label>
      <select name="targetPopularity" onChange={event => { this.setState({ targetPopularity: Number(event.target.value) }) }}>{mappedTargetPopularity}</select> */}
      <button onClick={()=> props.getGenrePlaylist()}>Get Playlist!</button>
    </div>
  );
}

export default Seed;