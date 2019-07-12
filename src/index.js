import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import App from './components/App/App';
import './index.css';

import {
  faSpinner,
  faWind,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faWind,
  faSpinner,
)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
 document.getElementById('root'));