import React from 'react';
import './Weather.css';
import TokenService from '../../services/token-service';

class Weather extends React.Component {

  state = {
    notValid: false,
  }
  render() {

  function isValidUSZip(sZip) {
      return /^\d{5}(-\d{4})?$/.test(sZip);
   }

  let validationError = '';
  if(this.state.notValid) {
    validationError = <div className="error">Please enter valid zipcode</div>
  } 

  return (
    <div>
      <div className="ribbon one"><div className="ribbon-header">Weather</div></div>
      <form id="weather-form" onSubmit={(e)=> {
        if (isValidUSZip(e.target.weatherInput.value)) {
            e.preventDefault();
            this.props.searchCity(e.target.weatherInput.value);
            TokenService.saveWeatherToken(e.target.weatherInput.value);   
            this.props.history.push('/genreOption');
        } else {
          e.preventDefault();
          this.setState({notValid: true})
        }  
          }}>
        {validationError}
        <label htmlFor="weatherInput"><h4>Find current conditions:</h4></label>
        <input className="input" 
        id="weatherInput" 
        name="weatherInput" 
        type="text" 
        placeholder="Enter a zip code" 
        aria-label="Zip code entry"
        aria-required="true"
        aria-invalid={this.state.notValid}
        required></input>
        <button className="btn btn-default" type="submit" >Get Weather</button>
      </form>
    </div>
  );
}
}

export default Weather;