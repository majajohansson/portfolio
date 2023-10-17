import React from 'react';
import { Page } from '../../ui';
import {
  StyledParagraph,
  StyledH1,
  StyledPost,
  StyledSummary,
  StyledSummaryPane,
  StyledH2,
} from '../../styledComponents';

import designPrice from '../../assets/design-price.png';

const DesignPrice = ({ match }) => (
  <Page match={match}>
    <StyledSummary>
      <StyledSummaryPane>
        <StyledH1>Svenska Designpriset</StyledH1>
        <StyledParagraph>In 2020 we won silver in the Swedish Design Awards for P.F.C., a Swedish FinTech startup.</StyledParagraph>
        <StyledParagraph>The Swedish Design Awards aims at rewarding the best Swedish design production of the year across many different industries and design creatives.</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={designPrice} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>
      <StyledH2>Success at the Swedish Design Awards</StyledH2>
      <StyledParagraph>I am thrilled to share our achievement at the Swedish Design Awards (Svenska Designpriset) where my dedicated design team and I secured a silver award in the Digital category. This was accomplished during my time at P.F.C., a forward-thinking Swedish FinTech startup committed to creating a user-friendly neobank for individuals embarking on a fresh financial journey.</StyledParagraph>
      <StyledH2>Elevating User Experience in Finance</StyledH2>
      <StyledParagraph>Our submission to the Swedish Design Awards centered around our mobile app, which we believed exemplified a seamless, enjoyable, and cohesive user experience across all its features. Finance, often regarded as a daunting and uninviting subject, need not be so. We were determined to challenge this perception by crafting a user interface that placed the customer at the forefront. Our aim was clear: to instill a sense of positive engagement within a financial application, ultimately fostering greater financial confidence among users.</StyledParagraph>
      <StyledH2>The Power of a Comprehensive Design System</StyledH2>
      <StyledParagraph>At the heart of our success in designing the P.F.C. app lies a meticulously crafted and well-defined design system. This system empowered us to establish consistent design elements throughout the application, enabling users to easily navigate its various functions and features. Moreover, the presence of a robust design system proved invaluable during design iterations, facilitating the efficient creation of elegant wireframes.</StyledParagraph>
      <StyledParagraph>Our dedication to user-centric design and the implementation of a robust design system has not only earned us recognition at the Swedish Design Awards but, more importantly, it has enabled us to redefine the user experience in the realm of finance, demonstrating that it can be engaging, welcoming, and empowering.</StyledParagraph>
    </StyledPost>
  </Page>
);

export default DesignPrice;
