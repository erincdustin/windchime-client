import React from 'react';
import renderer from 'react-test-renderer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import ChangeParams from './ChangeParams';

library.add(faWind)

describe(`ChangeParams`, () => {
  const props = {
    targetEnergy: .5,
    targetValence: .2,
    targetTempo: .3,
    targetPopularity: null,
    topArtists: [1,2,3,4,5],
    genreOption: 'folk',
    setEnergy: jest.fn(),
    setValence: jest.fn(),
    setTempo: jest.fn(),
    setPopularity: jest.fn(),
    getGenrePlaylist: jest.fn(),
    getArtistPlaylist: jest.fn(),
  }

  it('renders as expected', () => {
    const tree = renderer
      .create(<ChangeParams 
        setEnergy={props.setEnergy}
        targetEnergy={props.targetEnergy}
        setValence={props.setValence}
        targetValence={props.targetValence}
        setTempo={props.setTempo}
        targetTempo={props.targetTempo}
        setPopularity={props.setPopularity}
        targetPopularity={props.targetPopularity}
        getGenrePlaylist={props.getGenrePlaylist}
        getArtistPlaylist={props.getArtistPlaylist}
        topArtists={props.topArtists}
        genreOption={props.genreOption}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
