import styled from 'styled-components';
import { rgba } from 'polished';
import { media, colors, shades } from './styles';

const StyledArticle = styled.div`
  background-color: ${rgba(colors.dark, shades.lighter)};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 2rem;
  height: 40rem;
  max-width: 30rem;
  width: 100%;

  &:hover {
    box-shadow: 0 0.2rem 1.5rem ${rgba(colors.dark, shades.darker)};
    transform: translateY(-0.2rem);
    transition-property: box-shadow, transform;
    transition-duration: 0.3s;
  }

  ${media.phone`
    height: auto;
    margin: 2rem 0;
  `}
`;

export default StyledArticle;
