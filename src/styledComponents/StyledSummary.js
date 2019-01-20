import styled from 'styled-components';
import { media } from './styles';

const StyledSummary = styled.div`
  background-color: #f6f6f6;
  display: flex;
  justify-content: space-between;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  & > div:not(:last-child) {
    margin-right: 2rem;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > div {
    width: 30rem;
  }

  img {
    width: 100%;
    max-width: 30rem;
  }

  ${media.tablet`
    flex-wrap: wrap;

    > div {
      width: 100%;
    }
  `}
`;

export default StyledSummary;
