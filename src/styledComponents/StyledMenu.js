import styled from 'styled-components';
import { media } from './styles';

const StyledMenu = styled.nav`
  display: inline-block;
  width: 50%;
  text-align: right;

  ${media.phone`
    margin-top: 1.25rem;
    display: block;
    width: 100%;
    text-align: center;
  `}
`;

export default StyledMenu;
