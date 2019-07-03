import React from 'react';
import queryString from 'query-string';
import TokenService from '../services/token-service';

export default class Homepage extends React.Component {

  constructor(props) {
    super (props);
    let parsed = queryString.parse(window.location.search);
    let TOKEN_KEY = parsed.access_token;
    TokenService.saveAuthToken(TOKEN_KEY);
    props.history.push('/')
  }

  render() {
    return(
      <div>
        hello
        <button onClick={() => this.props.history.goBack()}>Go Back</button>
      </div>
    )
  }
}
