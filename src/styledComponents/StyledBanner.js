import styled from 'styled-components';
import { media } from './styles';
import StyledParagraph from './StyledParagraph';

const StyledArticle = styled.div`
  margin: 9% auto;
  width: 80%;

  > img {
    border-radius: 50%;
    display: inline-block;
    width: 15%;
    vertical-align: middle;
  }

  ${media.phone`
    display: none;
  `}
`;

export default StyledArticle;
