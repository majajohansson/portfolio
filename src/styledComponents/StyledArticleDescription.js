import styled from 'styled-components';
import StyledLink from './StyledLink';
import { media } from './styles';

const StyledArticleDescription = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  padding: 1.5rem;

  > * {
    width: 90%;
  }

  ${StyledLink} {
    > img {
      height: 10px;
      display: inline-block;
      margin-left: 15px;
    }
  }

  ${media.desktop`
    display: block;
    width: calc(100% - 3rem);
    margin: auto;
    position: static;

    > * {
      width: 100%;
    }
  `}
`;

export default StyledArticleDescription;
