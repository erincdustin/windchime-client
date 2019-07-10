import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';

library.add(faWind)

describe(`Header`, () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><Header /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
