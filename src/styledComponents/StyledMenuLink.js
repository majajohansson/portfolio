import styled from 'styled-components';
import StyledLink from './StyledLink';

const StyledMenuLink = styled.div`
  display: inline-block;
  margin: 0 1.25rem;
  color: ${props => props.active ? '#adadad' : '#000000'};

  ${StyledLink} {
    color: inherit;
  }
`;

export default StyledMenuLink;
