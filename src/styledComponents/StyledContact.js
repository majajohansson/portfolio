import styled from 'styled-components';
import { media } from './styles';

const StyledContact = styled.div`
  margin: 2.5rem auto;
  width: calc(100% - 6rem);

  li {
    margin: 0.75rem 0;
  }

  ${media.tablet`
    width: calc(100% - 8rem);
  `}

  ${media.phone`
    width: 100%;
  `}
`;

export default StyledContact;
