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

    //DRY up mapped parameter functions!
    const mappedTargetEnergy = options.map((energyOption, index) => {
      if (energyOption === '') {
        return <option key={index} value={''}>n/a</option>
      }
      return(
        <option key={index} value={energyOption}>{energyOption * 10}</option>
      )
    })
  
    const mappedTargetValence = options.map((valenceOption, index) => {
      if (valenceOption === '') {
        return <option key={index} value={''}>n/a</option>
      }
      return(
        <option key={index} value={valenceOption}>{valenceOption * 10}</option>
      )
    })
  
    const mappedTargetTempo = options.map((tempoOption, index) => {
      if (tempoOption === '') {
        return <option key={index} value={''}>n/a</option>
      }
      return(
        <option key={index} value={tempoOption}>{tempoOption * 10}</option>
      )
    })
  
    const mappedTargetPopularity = options.map((popularityOption, index) => {
      if (popularityOption === '') {
        return <option key={index} value={''}>n/a</option>
      }
      return(
        <option key={index} value={popularityOption * 100}>{popularityOption * 10}</option>
      )
    })

  return (
    <div>
      <h3>Pick a Genre:</h3>
      <div>{mappedGenres}</div>
      <h3> </h3>
      <button onClick={()=> props.getGenrePlaylist()}>Go!</button>

      <h3>OR Use your Top Artists:</h3>
      <button onClick={()=> props.getArtistPlaylist()}>Go!</button>

      <h3>Select Playlist Values Manually:</h3>
      <form>
        <label htmlFor="targetEnergy">Select Target Energy:</label>
        <select value={props.targetEnergy} name="targetEnergy" onChange={event => props.setEnergy(event.target.value)}>{mappedTargetEnergy}</select>
        <label htmlFor="targetValence">Select Target Happiness:</label>
        <select value={props.targetValence} name="targetValence" onChange={event => props.setValence(event.target.value)}>{mappedTargetValence}</select>
        <label htmlFor="targetTempo">Select Target Tempo:</label>
        <select value={props.targetTempo} name="targetTempo" onChange={event => props.setTempo(event.target.value)}>{mappedTargetTempo}</select>
        <label htmlFor="targetPopularity">Select Target Popularity:</label>
        <select value={props.targetPopularity} name="targetPopularity" onChange={event => props.setPopularity(event.target.value)}>{mappedTargetPopularity}</select>
      </form>
    </div>
  );
}

export default Seed;