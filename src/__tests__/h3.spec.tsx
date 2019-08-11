import React from 'react';
import { shallow } from 'enzyme';
import { H3 } from '../h3';
import { h3Props } from '../__stories__/components/h3.story';

describe('Testing H3 component', () => {
  it('matches H3 snapshot', () => {
    const wrapper = shallow(<H3 {...h3Props()}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
