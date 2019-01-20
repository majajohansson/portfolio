import styled from 'styled-components';
import { media } from './styles';

const StyledMenu = styled.nav`
  display: inline-block;
  width: 50%;
  text-align: right;

  ${media.phone`
    display: none;
  `}
`;

export default StyledMenu;
