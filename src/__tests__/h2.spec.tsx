import React from 'react';
import { shallow } from 'enzyme';
import { H2 } from '../h2';
import { h2Props } from '../__stories__/components/h2.story';

describe('Testing H2 component', () => {
  it('matches H2 snapshot', () => {
    const wrapper = shallow(<H2 {...h2Props()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
