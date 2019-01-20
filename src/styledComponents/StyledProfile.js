import styled from 'styled-components';
import { media } from './styles';

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2.5rem auto;

  img {
    width: 15rem;
    border-radius: 50%;
    margin: 2rem;
  }

  ${media.tablet`
    flex-direction: column;

    img {
      width: 40%;
    }
  `}
`;

export default StyledProfile;
