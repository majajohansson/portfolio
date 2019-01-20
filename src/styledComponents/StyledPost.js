import styled from 'styled-components';
import StyledH1 from './StyledH1';
import StyledH2 from './StyledH2';

const StyledPost = styled.div`
  ${StyledH1} {
    text-align: center;
  }

  ${StyledH2} {
    margin-top: 3rem;
  }

  img {
    display: block;
    max-width: 30rem;
    width: 80%;
    margin: 3rem auto;
  }
`;

export default StyledPost;
