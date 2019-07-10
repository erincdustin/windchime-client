import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import UserPlaylists from './UserPlaylists';

library.add(faWind)

describe(`UserPlaylists`, () => {
  const props = {
    id: '123'
  }

  it('renders as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
          <UserPlaylists
            id={props.id}
            />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})