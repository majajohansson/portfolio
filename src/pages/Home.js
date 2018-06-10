import React from 'react';
import articleMoankPicture from '../assets/article-moank.png';
import { Article, Page } from '../ui';


export default ({ match }) => (
  <Page match={match}>
    <Article
      picture={articleMoankPicture}
      title="Revamp of loan company website"
    >
    During the spring of 2018 I was hired by Moank, a company specialising in consumer loans, to do a revamp of the website.<br />
    The following are a few examples of what I worked on.
    </Article>
  </Page>
)
