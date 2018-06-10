import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLink from './HeaderLink';

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
  <div className="header">
    <div className="header__title"><Link to="/">Maja Johansson</Link></div>
    <div className="header__nav">
      {links.map((link, index) => (
        <HeaderLink
          path={link.path}
          title={link.title}
          active={match.path === link.path}
          key={index}
        />
      ))}
    </div>
  </div>
);
