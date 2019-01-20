import styled from 'styled-components';
import { media } from './styles';

const StyledBannerContent = styled.div`
  margin-left: 2rem;

  ${media.phone`
    margin-left: 0;
  `}
`;

export default StyledBannerContent;
