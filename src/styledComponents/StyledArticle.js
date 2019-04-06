import styled from 'styled-components';
import { rgba } from 'polished';
import { media, colors, shades } from './styles';
import StyledH2 from './StyledH2';

import { Link } from 'react-router-dom';

const StyledArticle = styled(Link)`
  background-image: url("${props => props.background}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.75rem;
  height: 16rem;
  max-width: 28rem;
  width: 100%;
  padding: 2rem;
  color: transparent;
  transition: color 0.3s ease;
  position: relative;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    transition: background-color 0.3s ease;
  }

  &:hover {
    color: white;

    &::before {
      background-color: rgba(0,0,0,0.5);
    }
  }

  ${StyledH2} {
    z-index: 1;
    text-align: center;
  }

  ${media.phone`
    margin: 2rem 0;
  `}
`;

export default StyledArticle;
