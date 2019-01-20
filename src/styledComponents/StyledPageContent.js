import styled from 'styled-components';
import { headerTotalHeight } from './StyledHeader';
import { footerTotalHeight } from './StyledFooter';
import { media } from './styles';

const StyledPageContent = styled.div`
  width: 100%;
  padding-top: ${headerTotalHeight}rem;
  padding-bottom: ${footerTotalHeight}rem;

  > * {
    width: 70rem;
    padding-left: calc((100% - 70rem) / 2);
    padding-right: calc((100% - 70rem) / 2);
  }

  @media (max-width: 74rem) {
    > * {
      width: calc(100% - 4rem);
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;

export default StyledPageContent;
