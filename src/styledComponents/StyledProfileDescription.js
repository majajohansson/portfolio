import styled from 'styled-components';
import { media } from './styles';

const StyledProfileDescription = styled.div`
  padding: 2rem;
  text-align: justify;

  ${media.tablet`
    width: calc(100% - 8rem);
  `}

  ${media.phone`
    padding: 0;
    width: 100%;
  `}
`;

export default StyledProfileDescription;
