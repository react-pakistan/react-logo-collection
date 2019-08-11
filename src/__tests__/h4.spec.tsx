import React from 'react';
import { shallow } from 'enzyme';
import { H4 } from '../h4';
import { h4Props } from '../__stories__/components/h4.story';

describe('Testing H4 component', () => {
  it('matches H4 snapshot', () => {
    const wrapper = shallow(<H4 {...h4Props()}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
