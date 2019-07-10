import React from 'react';
import renderer from 'react-test-renderer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import SeedGenre from './SeedGenre';

library.add(faWind)

describe(`SeedGenre`, () => {
  const props = {
    getArtistPlaylist: jest.fn(),
    getGenrePlaylist: jest.fn(),
    setGenre: jest.fn(),
  }

  it('renders as expected', () => {
    const tree = renderer
      .create(<SeedGenre
            getArtistPlaylist={props.getArtistPlaylist}
            getGenrePlaylist={props.getGenrePlaylist}
            setGenre={props.setGenre}
            />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})