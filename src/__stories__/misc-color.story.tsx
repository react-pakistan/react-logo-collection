import React, { ReactElement } from 'react';
import { LogoWrapper, LogoTextWrapper, LogoItem } from '../styled';
import { StyledStory } from '../styled-app';
import { LOGO_LIST } from './misc-color';

const logoStyle = { width: '7rem', height: '7rem' };

const renderItem = (
  item : { logo : React.SFC<React.SVGProps<SVGSVGElement>> , name : string }
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

const logos = LOGO_LIST.map(renderItem);

export const MiscColor = () : ReactElement => (
  <StyledStory>
    <LogoWrapper>
      {logos}
    </LogoWrapper>
  </StyledStory>
);

export default {
  title: 'Logo/MiscColor',

  parameters: {
    component: MiscColor,
  },
};
