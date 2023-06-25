import styled from 'styled-components';
import { media } from './styles';
import StyledH2 from './StyledH2';
import StyledParagraph from './StyledParagraph';

const StyledBannerContent = styled.div`
  margin-left: 2rem;

  ${StyledH2} {
    font-weight: bold;
    margin: 1rem 0;
  }

  ${StyledParagraph} {
    margin: 1rem 0;
  }

  ${media.phone`
    margin-left: 0;
  `}
`;

export default StyledBannerContent;
