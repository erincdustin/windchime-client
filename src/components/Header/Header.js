import React from 'react';
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css';
import queryString from 'query-string';

function Header() {
  let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    const path=`/${accessToken}/test`

  return (
    <div className="header">
      <Link to="/">Wind Chime</Link>
      {/* <FontAwesomeIcon className='blue' icon='wind' /> */}
      <button className="align-right"><Link to="/playlists">My Wind Chime Playlists</Link></button>
    </div>
  );
}

export default Header;