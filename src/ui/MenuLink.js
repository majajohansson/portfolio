import React from 'react';
import { StyledLink, StyledMenuLink } from '../styledComponents';

const MenuLink = ({ active, title, path }) => (
  <StyledMenuLink active={active}>
    {active ? title : <StyledLink to={path}>{title}</StyledLink>}
  </StyledMenuLink>
);

export default MenuLink;
