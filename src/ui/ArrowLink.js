import React from 'react';
import { StyledArrowLink } from '../styledComponents';
import arrow from '../assets/arrow.png';

export default ({ children, to }) => (
    <StyledArrowLink to={to}>
      {children}
      <img src={arrow} />
    </StyledArrowLink>
);
