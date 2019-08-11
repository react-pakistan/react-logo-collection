import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import { StyledStory } from '../../styled-app';
import { H4, IH4Props } from '../../h4';

const stories = storiesOf('commons/component', module);

export const h4Props = () : IH4Props => ({
  fontFamily: text('fontFamily', 'Montserrat'),
  fontSize: text('fontSize', '1.4em'),
  fontWeight: number('fontWeight', 700),
  lineHeight: text('lineHeight', 'normal'),
  letterSpacing: text('letterSpacing', '1px'),
  textAlign: text('textAlign', 'center'),
  textTransform: text('textTransform', 'uppercase'),
  color: text('color', '#2E2E2E'),
});

stories.add(
  'H4',
  () => (
    <StyledStory>
      <H4 {...h4Props()}>
        H4 Component
      </H4>
    </StyledStory>
  ),
);
