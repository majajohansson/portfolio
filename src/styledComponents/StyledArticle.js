import styled from 'styled-components';
import { media } from './styles';

const StyledArticle = styled.div`
  background-color: #f6f6f6;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 2rem;
  height: 40rem;
  max-width: 30rem;
  width: 100%;

  &:hover {
    box-shadow: 0 0.2rem 1.5rem #57575769;
    transform: translateY(-0.2rem);
    transition-property: box-shadow, transform;
    transition-duration: 0.3s;
  }

  ${media.phone`
    height: auto;
    margin: 2rem 0;
  `}
`;

export default StyledArticle;
