import styled from 'styled-components';

export const footerTotalHeight = 6;

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${footerTotalHeight}rem;
  font-size: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default StyledFooter;
