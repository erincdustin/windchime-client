import React from 'react';
import renderer from 'react-test-renderer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import Playlist from './Playlist';

library.add(faWind)

describe(`Playlist`, () => {
  const props = {
    playlistId: '12345'
  }

  it('renders as expected', () => {
    const tree = renderer
      .create(<Playlist 
        playlistId={props.playlistId}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
