import React, { ReactElement } from 'react';
import { LogoWrapper, LogoTextWrapper, LogoItem } from '../styled';
import { StyledStory } from '../styled-app';
import { LOGO_LIST } from './misc-grey';

const logoStyle = { width: '7rem', height: '7rem' };

const renderItem = (
  item : { logo : ReactElement<React.SVGProps<SVGSVGElement>> , name : string }
) : ReactElement => {
  const Logo = item.logo;
  return (
    <LogoItem
      key={item.name}
    >
      <Logo style={logoStyle} />
      <LogoTextWrapper>
        {item.name}
      </LogoTextWrapper>
    </LogoItem>
  );
};

export const MiscGrey = () : ReactElement => (
  <StyledStory>
    <LogoWrapper>
      {LOGO_LIST.map(renderItem)}
    </LogoWrapper>
  </StyledStory>
);

export default {
  title: 'Logo/MiscGrey',

  parameters: {
    component: MiscGrey,
  },
};
