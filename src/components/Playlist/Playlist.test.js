import React from 'react';
import renderer from 'react-test-renderer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { WindChimeProvider } from '../../contexts/windchime-context';
import Playlist from './Playlist';

library.add(faWind)

describe(`Playlist`, () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(<WindChimeProvider><Playlist /></WindChimeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
