import React from 'react';
import { shallow } from 'enzyme';
import { H1 } from '../h1';
import { h1Props } from '../__stories__/components/h1.story';

describe('Testing H1 component', () => {
  it('matches H1 snapshot', () => {
    const wrapper = shallow(<H1 {...h1Props()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
