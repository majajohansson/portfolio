import styled from 'styled-components';
import { media } from './styles';

const StyledProfileDescription = styled.div`
  padding: 2rem;
  text-align: justify;

  ${media.tablet`
    padding: 0;
  `}
`;

export default StyledProfileDescription;
