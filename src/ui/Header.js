import React from 'react';
import MenuLink from './MenuLink';
import {
  StyledHeader,
  StyledH1,
  StyledLink,
  StyledMenu,
} from '../styledComponents';
import scrollPercentAware from '../hoc/scrollPercentAware';

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

const Header = ({ match, scrollPercent }) => (
  <StyledHeader scrollPercent={scrollPercent}>
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

export default scrollPercentAware(Header);
