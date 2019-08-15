import React from 'react';
import { shallow } from 'enzyme';
import { ProjectIntro } from '../project-intro';
import { projectIntroProps } from '../__stories__/components/project-intro.story';

describe('Testing ProjectIntro component', () => {
  it('matches ProjectIntro snapshot', () => {
    const wrapper = shallow(<ProjectIntro {...projectIntroProps()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
