import styled from 'styled-components';
import { media } from './styles';

const StyledArticleImage = styled.img`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  width: 29.4117rem;
  flex-shrink: 0;

  ${media.desktop`
    display: block;
    width: 100%;
    margin: auto;
    position: static;
  `}
`;

export default StyledArticleImage;
