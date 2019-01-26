import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { media, colors, shades } from './styles';
import StyledH1 from './StyledH1';
import StyledLink from './StyledLink';

export const headerTotalHeight = 6;
const headerVerticalPadding = 2;
const progressBarHeight = 0.25;

const StyledHeader = styled.header`
  padding: ${headerVerticalPadding}rem 10%;
  display: flex;
  position: fixed;
  height: ${headerTotalHeight - 2 * headerVerticalPadding}rem;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${colors.light};
  z-index: 1;
  border-bottom: ${progressBarHeight}rem solid ${colors.secondary};

  &::after {
    content: "";
    position: absolute;
    bottom: -${progressBarHeight}rem;
    left: 0;
    transition-property: width;
    transition-duration: 0.2s;
    width: ${props => css`${props.scrollPercent * 100}%`};
    height: ${progressBarHeight}rem;
    background-color: ${rgba(colors.dark, shades.darkest)};
  }

  ${StyledH1} {
    margin: 0;
    width: 50%;

    ${StyledLink} {
      color: inherit;
      text-decoration: none;
    }
  }

  ${media.phone`
    text-align: center;

    ${StyledH1} {
      display: block;
      width: 100%;
    }
  `}
`;

export default StyledHeader;
