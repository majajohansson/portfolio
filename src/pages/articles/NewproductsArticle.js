import React from 'react';
import { Page } from '../../ui';
import { StyledParagraph, StyledH1, StyledH2, StyledPost } from '../../styledComponents';

import articleNewProductsPicture from '../../assets/Masthead.png';

const NewProductsArticle = ({ match }) => (
  <Page match={match}>
    <StyledPost>
      <StyledH1>Releasing new products</StyledH1>
      <img src={articleNewProductsPicture} />
      <StyledH2>Releasing new products</StyledH2>
      <StyledParagraph>Releasing new products is a project which started in July 2018 and is still ongoing. In this project I am the UX/UI designer and responsible for all aspects of product design, for example designing the process and website, user testing and creating material and presentations for stakeholders, while also improving the current product. The goal of the project is to release three new products; Samlingslån, personal loan and partner loan.</StyledParagraph>
      <StyledParagraph>I am currently working on creating a set of illustrations that will be used as hero images and also throughout the website. I am making the illustrations in Sketch. Soon I will be able to share more pictures and comments on what I have been working on this fall.</StyledParagraph>
    </StyledPost>
  </Page>
);

export default NewProductsArticle;
