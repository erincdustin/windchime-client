import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import PlaylistOption from './PlaylistOption';

library.add(faWind)

describe(`PlaylistOption`, () => {
  const props = {
    topArtists: [1,2,3,4,5],
    genreOption: 'folk'
  }

  it('renders as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
        <PlaylistOption 
          topArtists={props.topArtists}
          genreOption={props.genreOption}
          />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
