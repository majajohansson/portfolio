import React from 'react';
import HeaderLink from './HeaderLink';
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

export default ({ match }) => (
  <StyledHeader>
    <StyledH1><StyledLink to="/">Maja Johansson</StyledLink></StyledH1>
    <StyledMenu>
      {links.map((link, index) => (
        <HeaderLink
          path={link.path}
          title={link.title}
          active={match.path === link.path}
          key={index}
        />
      ))}
    </StyledMenu>
  </StyledHeader>
);
