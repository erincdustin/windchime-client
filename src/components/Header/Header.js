import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css';

function Header() {

  return (
    <div className="header">
      <Link className="logo link" to="/">Wind Chime <FontAwesomeIcon className='blue' icon='wind' /></Link>
      <Link className="align-right" to="/playlists">My Wind Chime Playlists</Link>
    </div>
  );
}

export default Header;