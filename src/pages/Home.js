import React from 'react';
import articleImprovingConversion from '../assets/ImprovingConversion.png';
import articleMyProcess from '../assets/MyProcess.png';
import articleQRCodePicture from '../assets/QRcode-picture.svg';
import articleNewProductPNG from '../assets/Prototype.png';
import articleViualDesignPicture from '../assets/UIDesign.png';
import articleErisLawPicture from '../assets/ErisLaw_article_image.png';
import designPricePicture from '../assets/design-price.png';
import doubleDiamondPicture from '../assets/Double_diamond.png';
import organiseDesignTeamPicture from '../assets/designers_ways_of_working.png';
import crypto from '../assets/powerDesignThinking/crypto_teaser.png';
import { Article, Page, Banner } from '../ui';
import { StyledArticleList } from '../styledComponents';



const Home = ({ match }) => (
  <Page match={match}>
    <Banner />
    <StyledArticleList>
      <Article
        picture={crypto}
        title="The power of design thinking in the world of cryptocurrency"
        slug="power-design-thinking-cryptocurrency"
      />
      <Article
        picture={designPricePicture}
        title="Svenska Designpriset"
        slug="design-price"
      />
      <Article
        picture={doubleDiamondPicture}
        title="The Double Diamond process"
        slug="double-diamond"
      />
      <Article
        picture={organiseDesignTeamPicture}
        title="Designers' ways of working"
        slug="organise-design-team"
      />
      <Article
        picture={articleErisLawPicture}
        title="Web design for Eris Law Advokatbyrå"
        slug="lawfirm"
      />
      <Article
        picture={articleNewProductPNG}
        title="Releasing new product"
        slug="newproducts"
      />
      <Article
        picture={articleMyProcess}
        title="My design process"
        slug="myprocess"
      />
      <Article
        picture={articleImprovingConversion}
        title="Improving conversion rate for FinTech startup"
        slug="moank"
      />
      <Article
        picture={articleQRCodePicture}
        title="How I improved the user experience of my user testing sessions"
        slug="qr-code-ux"
      />
      <Article
        picture={articleViualDesignPicture}
        title="Visual Design"
        slug="visual-design"
      />
    </StyledArticleList>
  </Page>
);

export default Home;
