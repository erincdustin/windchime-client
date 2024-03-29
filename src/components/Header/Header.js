import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TokenService from '../../services/token-service';
import './Header.css';

function Header(props) {

  return (
    <div className="header">
      <Link className="logo-link" to="/">Wind Chime <FontAwesomeIcon className='blue' icon='wind' /></Link>
      <div className="align-right">
        <button className="btn nav" onClick={() => props.history.push('/playlists')}>Playlists</button>
        <button className="btn nav" onClick={ ()=> {
          TokenService.clearWeatherToken();
          TokenService.clearGenreToken();
          TokenService.clearAuthToken();
          props.history.push('/');
          }}>
            Logout
        </button>
      </div>
    </div>
  );
}

export default Header;