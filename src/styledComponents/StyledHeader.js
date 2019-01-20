import styled, { css } from 'styled-components';
import { media } from './styles';
import StyledH1 from './StyledH1';
import StyledLink from './StyledLink';

export const headerTotalHeight = 6;
const headerVerticalPadding = 2;

const StyledHeader = styled.header`
  padding: ${headerVerticalPadding}rem 10%;
  display: flex;
  position: fixed;
  height: ${headerTotalHeight - 2 * headerVerticalPadding}rem;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  z-index: 1;
  border-bottom: 0.2rem solid #E5E5E5;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    transition-property: width;
    transition-duration: 0.2s;
    width: ${props => css`${props.scrollPercent * 100}%`};
    height: 0.2rem;
    background-color: #000000;
  }

  ${StyledH1} {
    margin: 0;
    display: inline-block;
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
