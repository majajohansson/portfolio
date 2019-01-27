import React from 'react';
import { Page } from '../../ui';
import {
  StyledParagraph,
  StyledH1,
  StyledH2,
  StyledPost,
  StyledSummary,
  StyledSummaryPane,
} from '../../styledComponents';

import articleNewProductsPicture from '../../assets/Masthead.png';

const NewProductsArticle = ({ match }) => (
  <Page match={match}>
    <StyledSummary>
      <StyledSummaryPane>
        <StyledH1>Releasing new products</StyledH1>
        <StyledParagraph>Releasing new product is a project which started during the fall of 2018. In this project I have been the UX/UI designer and responsible for all aspects of product design, for example designing the process and website, user testing and creating material and presentations for stakeholders, while also improving the current product. The goal of the project was to release a new product; Debt Consolidation Loan (Samlingslån in Swedish).</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={articleNewProductsPicture} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>
      <StyledH2>Background</StyledH2>
      <StyledParagraph>A few months before this project I did research to find out our customers’ needs of future products. Some methods I used was surveys, interviews and analyzing data.</StyledParagraph>

      <StyledH2>Development</StyledH2>
      <StyledParagraph>Using the styleguide and brandbook I had created earlier, I could quickly put together an MVP prototype for user testing. After several iterations of user testing I had a version where it did not occur any problems.</StyledParagraph>
      <StyledParagraph>I also put up heatmaps and other tools on the website to see how the users were interacting with the website. This does not give me any deep understanding of the users’ behavior, but it can at least give me an idea of the users’ interests in the products.</StyledParagraph>
      <StyledParagraph>To see the interest for a debt consolidation loan I designed a simple corresponding landing page with CTA-buttons. On the heatmaps I could then see how many users that were interacting with this page.</StyledParagraph>
      <StyledParagraph>Turning back to Sketch, I finalized the design, created all assets that were needed and it was implemented on the website.</StyledParagraph>
    </StyledPost>
  </Page>
);

export default NewProductsArticle;
