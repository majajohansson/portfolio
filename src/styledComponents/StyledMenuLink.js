import styled from 'styled-components';
import { rgba } from 'polished';
import { colors, shades } from './styles';
import StyledLink from './StyledLink';

const StyledMenuLink = styled.div`
  color: ${props => props.active ? rgba(colors.dark, shades.darker) : colors.dark};

  &:not(:last-child) {
    margin-right: 2.5rem;
  }

  ${StyledLink} {
    color: inherit;
  }
`;

export default StyledMenuLink;
