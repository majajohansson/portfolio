import React from 'react';
import { Link } from 'react-router-dom';

const activeClasses = 'header__nav__item header__nav__item--active';
const inactiveClasses = 'header__nav__item header__nav__item--inactive';

export default ({ active, title, path }) => active ?
  <div className={activeClasses}>
    {title}
  </div> :
  <div className={inactiveClasses}>
    <Link to={path}>{title}</Link>
  </div>;
