import React from 'react';
import { Page } from '../../ui';
import {
  StyledParagraph,
  StyledH1,
  StyledPost,
  StyledSummary,
  StyledSummaryPane,
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
      <StyledParagraph>The Swedish Design Awards (Svenska Designpriset) is a competition across many different design categories. My design team and I won silver in the category Digital. I competed while working for P.F.C., a Swedish FinTech startup that aims to become a user friendly neobank for people starting a new financial journey.</StyledParagraph>
      <StyledParagraph>We submitted our mobile app to the Swedish Design Awards as we believed that it is providing a smooth, enjoyable and cohesive user experience across all features of the application. Finance is often seen as a boring, unwelcoming topic but we wanted to prove that it does not have to be the case. By providing a user interface that puts the customer in the center it is possible to emulate positive engagement for a financial application, which can result in more financial confidence.</StyledParagraph>
      <StyledParagraph>A key for designing the P.F.C. app has been a complete and well defined design system. It has allowed us to have recogniseable design elements across the whole application which helps the customer to recognise the different functions and features. Having an established design system is also very useful during design iterations and allows us to produce beautiful wireframes efficiently.</StyledParagraph>
    </StyledPost>
  </Page>
);

export default DesignPrice;
