import React from 'react';
import articleMoankPicture from '../assets/article-moank.png';
import articleProcessPicture from '../assets/process.png';
import articleNewProductsPicture from '../assets/Masthead.png';
import { Article, Page, Banner } from '../ui';
import { StyledArticleList } from '../styledComponents';


const Home = ({ match }) => (
  <Page match={match}>
    <Banner />
    <StyledArticleList>
      <Article
        picture={articleNewProductsPicture}
        title="Releasing new products"
        slug="newproducts"
      >
        Releasing new products is a project which started in July 2018 and is still ongoing. In this project I am the UX/UI designer and responsible for all aspects of product design...
      </Article>
      <Article
        picture={articleMoankPicture}
        title="Improving conversion rate for FinTech startup"
        slug="moank"
      >
        In January 2018 I was hired by a FinTech startup called Moank, a company specialising in consumer loans, to do a revamp of the website.
      </Article>
      <Article
        picture={articleProcessPicture}
        title="My design process"
        slug="myprocess"
      >
        Everyone has different processes to complete a task. I created a schema displaying the process that I am using for the moment when working, and it works really well for me.
      </Article>
    </StyledArticleList>
  </Page>
);

export default Home;
