import React from 'react';
import articleImprovingConversion from '../assets/ImprovingConversion.png';
import articleProcessPicture from '../assets/myProcess.svg';
import articleMyProcess from '../assets/MyProcess.png';
import articleQRCodePicture from '../assets/QRcode-picture.svg';
import articleNewProductPNG from '../assets/Prototype.png';
import articleViualDesignPicture from '../assets/UIDesign.png';
import articleErisLawPicture from '../assets/ErisLaw_article_image.png';
import { Article, Page, Banner } from '../ui';
import { StyledArticleList } from '../styledComponents';



const Home = ({ match }) => (
  <Page match={match}>
    <Banner />
    <StyledArticleList>
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
