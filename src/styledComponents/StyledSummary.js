import styled from 'styled-components';
import { rgba } from 'polished';
import { media, colors, shades } from './styles';

const StyledSummary = styled.div`
  background-color: ${rgba(colors.dark, shades.lighter)};
  display: flex;
  justify-content: space-between;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  & > div:not(:last-child) {
    margin-right: 2rem;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > div {
    width: 30rem;
  }

  img {
    width: 100%;
    max-width: 30rem;
  }

  ${media.tablet`
    flex-wrap: wrap;

    > div {
      width: 100%;
    }
  `}
`;

export default StyledSummary;
