import React from 'react';
import articleMoankPicture from '../assets/article-moank.png';
import arrow from '../assets/arrow.png';


export default () => (
  <div>
    <div className="header">
      <div className="header__title">Maja Johansson</div>
      <div className="header__nav">
        <div className="header__nav__item">Work</div>
        <div className="header__nav__item">About me</div>
      </div>
    </div>
    <div className="content">
      <div className="article">
        <div className="article__description">
          <div className="article__description__header">
            Check what I did at Moank
          </div>
          <div className="article__description__text">
            I did something amazing and you can't ewait to check it out. You really should
          </div>
          <div className="article__description__link">
            Read more <img src={arrow} />
          </div>
        </div>
        <div className="article__image">
          <img src={articleMoankPicture} />
        </div>
      </div>
    </div>
  </div>
)
