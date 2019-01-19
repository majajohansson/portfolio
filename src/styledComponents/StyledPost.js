import styled from 'styled-components';
import StyledH1 from './StyledH1';
import StyledH2 from './StyledH2';
import { media } from './styles';

const StyledPost = styled.div`
  ${StyledH1} {
    text-align: center;
  }

  ${StyledH2} {
    margin-top: 3rem;
  }

  img {
    display: block;
    width: 40rem;
    margin: 3rem auto;
  }

  ${media.desktop`
    padding: 0 2rem;
  `}

  ${media.tablet`
    img {
      width: 80%;
    }
  `}

  ${media.phone`
    padding: 0;
  `}
`;

export default StyledPost;
