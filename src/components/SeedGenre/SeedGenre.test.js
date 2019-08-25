import React from 'react';
import renderer from 'react-test-renderer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { WindChimeProvider } from '../../contexts/windchime-context';
import SeedGenre from './SeedGenre';

library.add(faWind)

describe(`SeedGenre`, () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(<WindChimeProvider><SeedGenre /></WindChimeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})