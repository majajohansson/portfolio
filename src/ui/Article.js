import React from 'react';
import arrow from '../assets/arrow.png';

export default ({ picture, title, children }) => (
  <div className="article">
    <div className="article__description">
      <div className="article__description__header">
        {title}
      </div>
      <div className="article__description__text">
        {children}
      </div>
      <div className="article__description__link">
        Read more <img src={arrow} />
      </div>
    </div>
    <div className="article__image">
      <img src={picture} />
    </div>
  </div>
);
