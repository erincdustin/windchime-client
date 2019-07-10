import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import PlaylistResults from './PlaylistResults';

library.add(faWind)

describe(`PlaylistResults`, () => {
  const props = {
    playlistId: '12345'
  }

  it('renders as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
          <PlaylistResults
            playlistId={props.playlistId}
            />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
