import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rgba } from 'polished';
import { colors, shades } from './styles';

const StyledLink = styled(Link)`
  color: ${rgba(colors.dark, shades.darker)};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
