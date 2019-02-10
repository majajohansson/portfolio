import React from 'react';
import articleMoankPicture from '../assets/article-moank.png';
import articleProcessPicture from '../assets/myProcess.svg';
import articleQRCodePicture from '../assets/QRcode-picture.svg';
import articleNewProductsPicture from '../assets/accountCreditHero.svg';
import articleViualDesignPicture from '../assets/howItWorks.svg';
import { Article, Page, Banner } from '../ui';
import { StyledArticleList } from '../styledComponents';


const Home = ({ match }) => (
  <Page match={match}>
    <Banner />
    <StyledArticleList>
      <Article
        picture={articleNewProductsPicture}
        title="Releasing new product"
        slug="newproducts"
      >
        Releasing new product is a project which started during the fall of 2018. In this project I have been the UX/UI designer and responsible for all aspects of product design...
      </Article>
      <Article
        picture={articleMoankPicture}
        title="Improving conversion rate for FinTech startup"
        slug="moank"
      >
        In January 2018 I was hired by a FinTech startup called Moank, a company specialising in consumer loans, to do a revamp of the website.
      </Article>
      <Article
        picture={articleViualDesignPicture}
        title="UI Design"
        slug="visual-design"
      >
        I love to design simple and beautiful digital experiences that create real value for end users. Here are some of the illustrations I made during this project.
      </Article>
      <Article
        picture={articleQRCodePicture}
        title="How I improved the user experience of my user testing sessions"
        slug="qr-code-ux"
      >
        This is how I improved the user experience of my user testing sessions outside of the office.
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
