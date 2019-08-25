import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'
import { WindChimeProvider } from '../../contexts/windchime-context';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import PlaylistOption from './PlaylistOption';

library.add(faWind)

describe(`PlaylistOption`, () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(<WindChimeProvider>
          <BrowserRouter>
            <PlaylistOption />
          </BrowserRouter>
        </WindChimeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
