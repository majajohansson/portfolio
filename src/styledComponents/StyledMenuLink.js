import styled from 'styled-components';
import StyledLink from './StyledLink';

const StyledMenuLink = styled.div`
  color: ${props => props.active ? '#adadad' : '#000000'};

  &:not(:last-child) {
    margin-right: 2.5rem;
  }

  ${StyledLink} {
    color: inherit;
  }
`;

export default StyledMenuLink;
