import React from 'react';
import articleMoankPicture from '../assets/article-moank.png';
import { Article, Page, Banner } from '../ui';


export default ({ match }) => (
  <Page match={match}>
    <Banner />
    <Article
      picture={articleMoankPicture}
      title="Improving conversion rate for FinTech startup"
      slug="moank"
    >
      In January 2018 I was hired by a FinTech startup called Moank, a company specialising in consumer loans, to do a revamp of the website.<br />
      The following are a few examples of what I worked on.
    </Article>
  </Page>
)
