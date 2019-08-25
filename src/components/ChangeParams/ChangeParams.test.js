import React from 'react';
import renderer from 'react-test-renderer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { WindChimeProvider } from '../../contexts/windchime-context';
import ChangeParams from './ChangeParams';

library.add(faWind)

describe.only(`ChangeParams`, () => {

  it('renders as expected', () => {
    const tree = renderer
      .create(<WindChimeProvider><ChangeParams/></WindChimeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
