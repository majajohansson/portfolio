import styled from 'styled-components';
import { media } from './styles';

const StyledArticle = styled.div`
  background-color: #f2f2f2;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin: 3rem 0;
  height: 20rem;

  ${media.desktop`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 2rem;
    width: 35rem;
    margin: 3rem auto;
  `}

  ${media.phone`
    width: calc(100% - 4rem);
  `}
`;

export default StyledArticle;
