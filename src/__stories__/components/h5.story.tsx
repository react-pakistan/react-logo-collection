import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import { StyledStory } from '../../styled-app';
import { H5, IH5Props } from '../../h5';

const stories = storiesOf('commons/component', module);

export const h5Props = () : IH5Props => ({
  fontFamily: text('fontFamily', 'Montserrat'),
  fontSize: text('fontSize', '1.2em'),
  fontWeight: number('fontWeight', 700),
  lineHeight: text('lineHeight', 'normal'),
  letterSpacing: text('letterSpacing', '1px'),
  textAlign: text('textAlign', 'center'),
  textTransform: text('textTransform', 'uppercase'),
  color: text('color', '#2E2E2E'),
});

stories.add(
  'H5',
  () => (
    <StyledStory>
      <H5 {...h5Props()}>
        H5 Component
      </H5>
    </StyledStory>
  ),
);
