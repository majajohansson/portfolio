import React from 'react';
import { StyledFooter } from '../styledComponents';

const Footer = () => (
  <StyledFooter>
    Copyright &copy; {new Date().getFullYear()} Maja Johansson
  </StyledFooter>
);

export default Footer;
