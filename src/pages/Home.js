import React from 'react';
import articleMoankPicture from '../assets/article-moank.png';
import { Article, Page } from '../ui';


export default ({ match }) => (
  <Page match={match}>
    <Article
      picture={articleMoankPicture}
      title="Check what I did at Moank"
    >
      I did something amazing and you can't wait to check it out. You really should
    </Article>
  </Page>
)
