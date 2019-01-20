import styled from 'styled-components';
import { headerTotalHeight } from './StyledHeader';
import { footerTotalHeight } from './StyledFooter';
import { media } from './styles';

const StyledPageContent = styled.div`
  max-width: 65rem;
  margin: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: ${headerTotalHeight}rem;
  padding-bottom: ${footerTotalHeight}rem;

  ${media.desktop`
    width: calc(100% - 4rem);
  `}

  ${media.phone`
    padding-left: 1rem;
    padding-right: 1rem;
    width: calc(100% - 2rem);
  `}
`;

export default StyledPageContent;
