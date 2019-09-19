import styled, { ThemedStyledProps } from 'styled-components';
import { ITheme } from '../../theme';

export const ProjectIntroContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const ProjectHeadingContainer = styled.div<IProjectHeadingContainerProps>`
  background-color: ${(props : ThemedStyledProps<IProjectHeadingContainerProps, ITheme>) : string =>
    props.backgroundColor};
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 1em;
`;

export const MaintainerHeadingContainer = styled.div``;

export interface IProjectHeadingContainerProps {
  /**
   *
   */
  backgroundColor : string;
}
