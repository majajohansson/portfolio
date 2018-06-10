import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.png';

export default ({ picture, title, children, slug }) => (
  <div className="article">
    <div className="article__image">
      <img src={picture} />
    </div>
    <div className="article__description">
      <div className="article__description__header">
        {title}
      </div>
      <div className="article__description__text">
        {children}
      </div>
      <div className="article__description__link">
        <Link to={`/article/${slug}`}>Read more <img src={arrow} /></Link>
      </div>
    </div>
  </div>
);
