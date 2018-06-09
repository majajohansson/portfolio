import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="header__title">Maja Johansson</div>
    <div className="header__nav">
      {links.map((link, index) => match.path === link.path ?
        <div className="header__nav__item header__nav__item--active">
          {link.title}
        </div> :
        <div className="header__nav__item header__nav__item--inactive">
          <Link to={link.path}>{link.title}</Link>
        </div>)}
    </div>
  </div>
);
