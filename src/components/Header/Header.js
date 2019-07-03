import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import queryString from 'query-string';

function Header() {
  let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    const path=`/${accessToken}/test`

  return (
    <div className="header">
      <Link to="/">Wind Chime</Link>
      <Link to="/playlists">Past Playlists</Link>
      {/* <img className="windChime" src='https://media.istockphoto.com/vectors/wind-chimes-icon-simple-style-vector-id669585328?k=6&m=669585328&s=612x612&w=0&h=KjWQraYb3AvufwFRA8_G8XHUeBxE6hsDLEKbSQE3t88='></img> */}
    </div>
  );
}

export default Header;