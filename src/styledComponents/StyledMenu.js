import styled from 'styled-components';
import { media } from './styles';

const StyledMenu = styled.nav`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  ${media.phone`
    display: none;
  `}
`;

export default StyledMenu;
