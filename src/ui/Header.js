import React from 'react';
import MenuLink from './MenuLink';
import {
  StyledHeader,
  StyledH1,
  StyledLink,
  StyledMenu,
} from '../styledComponents';

const links = [
  {
    title: 'Work',
    path: '/',
  },
  {
    title: 'About me',
    path: '/about-me',
  }
];

const Header = ({ match }) => (
  <StyledHeader>
    <StyledH1><StyledLink to="/">Maja Johansson</StyledLink></StyledH1>
    <StyledMenu>
      {links.map((link, index) => (
        <MenuLink
          path={link.path}
          title={link.title}
          active={match.path === link.path}
          key={index}
        />
      ))}
    </StyledMenu>
  </StyledHeader>
);

export default Header;
