import styled from 'styled-components';
import { media } from './styles';
import StyledH1 from './StyledH1';
import StyledLink from './StyledLink';

const StyledHeader = styled.header`
  padding: 2.5rem 10%;

  ${StyledH1} {
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
