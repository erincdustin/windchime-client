import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'
import { WindChimeProvider } from '../../contexts/windchime-context';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import App from './App';

library.add(faWind)

describe('App', () => {
  it('renders without crashing', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
    <App />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<WindChimeProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
        </WindChimeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})