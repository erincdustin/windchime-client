import React from 'react';
import TokenService from '../../services/token-service';
import WindChimeApiService from '../../services/api-service';
import WindChimeContext from '../../contexts/windchime-context';
import './Weather.css';

class Weather extends React.Component {

  static contextType = WindChimeContext;

  state = {
    notValid: false,
  }

  //sends to /api/weather endpoint for proxy, then sets state for targetEnergy, 
  //targetValence, etc. according to weather conditions.  These values
  //are then used for the recommendations API call
  handleSearchCity = (postalCode) => {
    WindChimeApiService.getWeather(postalCode)
      .then(response => {
        this.context.setWeather(response)
        const icon = response.weather[0].icon;
        const id = response.weather[0].id;
          if(icon.endsWith('n')) {
            this.context.setTargetValence(.2)
            this.context.setTargetTempo(.2)
            this.context.setTargetEnergy(.2)
          }
          if(icon.endsWith('d')) {
          if(id.toString().startsWith('2')) {
            this.context.setTargetValence(.2)
            this.context.setTargetTempo(.5)
            this.context.setTargetEnergy(.6)
          }
          if(id.toString().startsWith('3')) {
            this.context.setTargetValence(.4)
            this.context.setTargetTempo(.2)
            this.context.setTargetEnergy(.4)
          } 
          if(id.toString().startsWith('5')) {
            this.context.setTargetValence(.3)
            this.context.setTargetTempo(.4)
            this.context.setTargetEnergy(.4)
          }
          if(id.toString().startsWith('6')) {
            this.context.setTargetValence(.6)
            this.context.setTargetEnergy(.6)
          } 
          if(id.toString().startsWith('7')) {
            this.context.setTargetValence(.2)
            this.context.setTargetEnergy(.4)
          }
          if(id.toString() === ('800')) {
            this.context.setTargetValence(.9)
            this.context.setTargetEnergy(.9)
          }
          if(id.toString() === '801') {
            this.context.setTargetValence(.8)
            this.context.setTargetEnergy(.8)
          }
          if(id.toString() === '802') {
            this.context.setTargetValence(.6)
            this.context.setTargetEnergy(.6)
          }
          if(id.toString() === '803') {
            this.context.setTargetValence(.45)
            this.context.setTargetEnergy(.45)
          }
          if(id.toString() === '804') {
            this.context.setTargetValence(.15)
            this.context.setTargetEnergy(.15)
          }
        }
    })
      .catch(err => {
        this.context.setError(err)
      })
  }

  isValidUSZip = (zip) => {
    return /^\d{5}(-\d{4})?$/.test(zip);
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.isValidUSZip(e.target.weatherInput.value)) {
      this.handleSearchCity(e.target.weatherInput.value);
      TokenService.saveWeatherToken(e.target.weatherInput.value);   
      this.props.history.push('/genreOption');
    } else {
      this.setState({notValid: true})
    }  
  }

  renderValidationError(){
    let { notValid } = this.state
    let validationError = ''
     if(notValid) {
      validationError = <div className="error">Please enter valid zipcode</div>
    }
    return validationError
  } 

  render() {
  return (
    <div>
      <div className="ribbon one"><div className="ribbon-header">Weather</div></div>
      <form id="weather-form" onSubmit={e => this.handleSubmit(e)}>          
        {this.renderValidationError()}
        <input className="input" 
        id="weatherInput" 
        name="weatherInput" 
        type="text" 
        placeholder="Enter zip code" 
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