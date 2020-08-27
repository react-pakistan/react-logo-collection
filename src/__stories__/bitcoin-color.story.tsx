import React, { ReactElement } from 'react';
import { LogoWrapper, LogoTextWrapper, LogoItem } from '../styled';
import { StyledStory } from '../styled-app';
import { LOGO_LIST } from './bitcoin-color';

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

const logos = LOGO_LIST.map(renderItem);

export const BitcoinColor = () : ReactElement => (
  <StyledStory>
    <LogoWrapper>
      {logos}
    </LogoWrapper>
  </StyledStory>
);

export default {
  title: 'Logo/BitcoinColor',

  parameters: {
    component: BitcoinColor,
  },
};
