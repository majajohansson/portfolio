import styled from 'styled-components';
import { media } from './styles';

const StyledPageContent = styled.div`
  width: 65rem;
  margin: auto;
  margin-top: 7%;
  padding-bottom: 120px;

  ${media.desktop`
    width: 100%;
  `}

  ${media.phone`
    width: 90%;
    margin: auto;
    margin-top: 0;
  `}
`;

export default StyledPageContent;
