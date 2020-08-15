import { ITheme } from '@taimoormk/util-functions';
import { SVGProps } from 'react';
import styled, { ThemedStyledProps } from 'styled-components';

export const IconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const IconTextWrapper = styled.div`
  color: ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.colors.white};
  font-size: 0.75em;
  margin-top: 0.75em;
`;

export const IconItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 10em;
  justify-content: center;
  width: 10em;
`;

export interface IIconProps extends SVGProps<SVGSVGElement> {
  style : {
    height : string;
    width : string;
  }
}
