/*
 * Generated by scripts/generate-icons.js
 * DO NOT EDIT!
 */

import React, { ReactElement } from 'react';
import { IconWrapper, IconTextWrapper, IconItem } from '../styled';
import { StyledStory } from '../styled-app';
import { ICON_LIST } from './zoo-color';

const iconStyle = { width: '7rem', height: '7rem' };

const renderItem = (
  item : { icon : React.SFC<React.SVGProps<SVGSVGElement>> , name : string }
) : ReactElement => {
  const Icon = item.icon;
  return (
    <IconItem
      key={item.name}
    >
      <Icon style={iconStyle} />
      <IconTextWrapper>
        {item.name}
      </IconTextWrapper>
    </IconItem>
  );
};

const icons = ICON_LIST.map(renderItem);

export const ZooColor = () : ReactElement => (
  <StyledStory>
    <IconWrapper>
      {icons}
    </IconWrapper>
  </StyledStory>
);

export default {
  title: 'Icon/ZooColor',

  parameters: {
    component: ZooColor,
  },
};
