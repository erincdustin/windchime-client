import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { WindChimeProvider } from '../../contexts/windchime-context';
import UserPlaylists from './UserPlaylists';

library.add(faWind)

describe(`UserPlaylists`, () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(<WindChimeProvider>
          <BrowserRouter>
            <UserPlaylists />
          </BrowserRouter>
        </WindChimeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})