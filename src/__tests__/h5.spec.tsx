import React from 'react';
import { shallow } from 'enzyme';
import { H5 } from '../h5';
import { h5Props } from '../__stories__/components/h5.story';

describe('Testing H5 component', () => {
  it('matches H5 snapshot', () => {
    const wrapper = shallow(<H5 {...h5Props()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
