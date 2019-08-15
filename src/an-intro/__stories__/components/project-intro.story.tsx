import React from 'react';
import { storiesOf } from '@storybook/react';
// import { text } from '@storybook/addon-knobs';
import { StyledStory } from '../../../styled-app';
import { ProjectIntro, IProjectIntroProps } from '../../project-intro';

const stories = storiesOf('alpha/a', module);

export const projectIntroProps = () : IProjectIntroProps => ({
});

stories.add(
  'ProjectIntro',
  () => (
    <StyledStory>
      <ProjectIntro {...projectIntroProps()} />
    </StyledStory>
  ),
);
