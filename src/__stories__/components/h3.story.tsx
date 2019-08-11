import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import { StyledStory } from '../../styled-app';
import { H3, IH3Props } from '../../h3';

const stories = storiesOf('commons/component', module);

export const h3Props = () : IH3Props => ({
  fontFamily: text('fontFamily', 'Montserrat'),
  fontSize: text('fontSize', '1.6em'),
  fontWeight: number('fontWeight', 700),
  lineHeight: text('lineHeight', 'normal'),
  letterSpacing: text('letterSpacing', '1px'),
  textAlign: text('textAlign', 'center'),
  textTransform: text('textTransform', 'uppercase'),
  color: text('color', '#2E2E2E'),
});

stories.add(
  'H3',
  () => (
    <StyledStory>
      <H3 {...h3Props()}>
        H3 Component
      </H3>
    </StyledStory>
  ),
);
