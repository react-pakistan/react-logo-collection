import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { LOGO_LIST } from './vintage-color-list';

const logoStyle = { width: '7rem', height: '7rem' };

const renderItem = (
  item : { logo : React.SFC<React.SVGProps<SVGSVGElement>>, name : string },
  index : number
) => {
  const Logo = item.logo;
  return (
    <div
      key={index}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '10rem',
        height: '10rem',
      }}
      title={item.name}
    >
      <Logo style={logoStyle} />
      <div style={{ fontSize: '0.75rem', marginTop: '0.75rem' }}>
        {item.name}
      </div>
    </div>
  );
};

const commonIcons = LOGO_LIST.map(renderItem);

export const AllIcons = () : JSX.Element => (
  <div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {commonIcons}
    </div>
  </div>
);

const stories = storiesOf('commons/Logos', module);

stories.add('VintageColorLogos', () => <AllIcons />);
