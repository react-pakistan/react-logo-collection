import React, { ReactElement } from 'react';
import { LogoWrapper, LogoTextWrapper, LogoItem } from '../../styled';
import { LOGO_LIST } from './bitcoin-color';

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

export const BitcoinColor = () : ReactElement => (
  <LogoWrapper>
    {logos}
  </LogoWrapper>
);

export default {
  title: 'Logo|BitcoinColor',

  parameters: {
    component: BitcoinColor,
  },
};
