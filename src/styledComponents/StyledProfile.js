import styled from 'styled-components';
import { media } from './styles';

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 30%;
    border-radius: 50%;
    vertical-align: middle;
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
