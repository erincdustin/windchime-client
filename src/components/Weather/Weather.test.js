import React from 'react';
import renderer from 'react-test-renderer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import Weather from './Weather';

library.add(faWind)

describe(`Weather`, () => {
  const props = {
    searchCity: jest.fn()
  }

  it('renders as expected', () => {
    const tree = renderer
      .create(<Weather
            searchCity={props.searchCity}
            />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})