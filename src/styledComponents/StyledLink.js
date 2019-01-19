import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: #adadad;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
