import styled from 'styled-components';
import { media } from './styles';
import StyledParagraph from './StyledParagraph';

const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem auto;
  width: 70%;

  > img {
    border-radius: 50%;
    width: 6rem;
  }

  ${media.phone`
    flex-wrap: wrap;
    width: 100%;
    text-align: center;
  `}
`;

export default StyledBanner;
