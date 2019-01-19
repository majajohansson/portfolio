import React from 'react';
import { StyledArrowLink } from '../styledComponents';
import arrow from '../assets/arrow.png';

const ArrowLink = ({ children, to }) => (
    <StyledArrowLink to={to}>
      {children}
      <img src={arrow} />
    </StyledArrowLink>
);

export default ArrowLink;
