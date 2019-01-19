import styled from 'styled-components';
import SyledLink from './StyledLink';

const StyledArrowLink = styled(SyledLink)`
  color: inherit;

  > img {
    height: 10px;
    display: inline-block;
    margin-left: 15px;
  }
`;

export default StyledArrowLink;
