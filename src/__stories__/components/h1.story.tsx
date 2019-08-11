import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import { StyledStory } from '../../styled-app';
import { H1, IH1Props } from '../../h1';

const stories = storiesOf('commons/component', module);

export const h1Props = () : IH1Props => ({
  fontFamily: text('fontFamily', 'Playfair Display'),
  fontSize: text('fontSize', '2em'),
  fontWeight: number('fontWeight', 700),
  lineHeight: text('lineHeight', 'normal'),
  letterSpacing: text('letterSpacing', '1px'),
  textAlign: text('textAlign', 'center'),
  textTransform: text('textTransform', 'uppercase'),
  color: text('color', '#2E2E2E'),
});

stories.add(
  'H1',
  () => (
    <StyledStory>
      <H1 {...h1Props()}>
        H1 Component
      </H1>
    </StyledStory>
  ),
);
