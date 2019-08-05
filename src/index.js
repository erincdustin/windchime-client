import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import App from './components/App/App';
import './index.css';

import {
  faSpinner,
  faWind,
  faCircle,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faWind,
  faSpinner,
  faCircle,
)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
 document.getElementById('root'));