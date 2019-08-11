import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import { StyledStory } from '../../styled-app';
import { H2, IH2Props } from '../../h2';

const stories = storiesOf('commons/component', module);

export const h2Props = () : IH2Props => ({
  fontFamily: text('fontFamily', 'Montserrat'),
  fontSize: text('fontSize', '1.8em'),
  fontWeight: number('fontWeight', 700),
  lineHeight: text('lineHeight', 'normal'),
  letterSpacing: text('letterSpacing', '1px'),
  textAlign: text('textAlign', 'center'),
  textTransform: text('textTransform', 'uppercase'),
  color: text('color', '#2E2E2E'),
});

stories.add(
  'H2',
  () => (
    <StyledStory>
      <H2 {...h2Props()}>
        H2 Component
      </H2>
    </StyledStory>
  ),
);
