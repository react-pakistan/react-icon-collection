import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { ICON_LIST } from './home-grey-list';

const iconStyle = { width: '7rem', height: '7rem' };

const renderItem = (
  item : { icon : React.SFC<React.SVGProps<SVGSVGElement>>, name : string },
  index : number
) => {
  const Icon = item.icon;
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
      <Icon style={iconStyle} />
      <div style={{ fontSize: '0.75rem', marginTop: '0.75rem' }}>
        {item.name}
      </div>
    </div>
  );
};

const commonIcons = ICON_LIST.map(renderItem);

const AllIcons = () : JSX.Element => (
  <div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {commonIcons}
    </div>
  </div>
);

const stories = storiesOf('Icons', module);

stories.add('HomeGreyIcons', () => <AllIcons />);
