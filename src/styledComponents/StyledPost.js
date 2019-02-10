import styled from 'styled-components';
import StyledH1 from './StyledH1';
import StyledH2 from './StyledH2';
import StyledParagraph from './StyledParagraph';

const StyledPost = styled.div`
  ${StyledH1} {
    text-align: center;
  }

  ${StyledH2} {
    margin-top: 3rem;
  }

  ${StyledParagraph} {
    text-align: justify;
  }

  img {
    display: block;
    max-width: 50rem;
    width: 100%;
    margin: 3rem auto;
  }
`;

export default StyledPost;
