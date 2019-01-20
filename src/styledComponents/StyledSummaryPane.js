import styled from 'styled-components';
import StyledH1 from './StyledH1';
import { media } from './styles';

const StyledSummaryPane = styled.div`
  width: 30rem;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${StyledH1} {
    margin-top: 0;
  }

  ${media.tablet`
    width: 100%;
  `}
`;

export default StyledSummaryPane;
