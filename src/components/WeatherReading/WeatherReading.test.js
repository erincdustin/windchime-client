import React from 'react';
import renderer from 'react-test-renderer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { WindChimeProvider } from '../../contexts/windchime-context';
import WeatherReading from './WeatherReading';

library.add(faWind)

describe(`Weather Reading`, () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(<WindChimeProvider><WeatherReading/></WindChimeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})