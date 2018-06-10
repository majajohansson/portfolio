import React from 'react';
import { Link } from 'react-router-dom';
import articleMoankPicture from '../assets/article-moank.png';
import { Article, Page } from '../ui';
import arrow from '../assets/arrow.png';
import profilePicture from '../assets/maja.jpg';


export default ({ match }) => (
  <Page match={match}>
    <div className="banner">
      <img src={profilePicture} className="banner__profile-picture"/>
      <div className="banner__text">
        Hi! My name is Maja. I’m a product design graduate based in Stockholm looking for a UI/UX designer position.<br />
        <Link to="/about-me">Learn more about me<img src={arrow} /></Link>
      </div>
    </div>
    <Article
      picture={articleMoankPicture}
      title="Revamp of loan company website"
      slug="moank"
    >
      During the spring of 2018 I was hired by Moank, a company specialising in consumer loans, to do a revamp of the website.<br />
      The following are a few examples of what I worked on.
    </Article>
  </Page>
)
