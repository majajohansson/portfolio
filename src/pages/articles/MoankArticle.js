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

import articleMoankPicture from '../../assets/article-moank.png';
import PortfolioExample from '../../assets/PortfolioExample.png';

const MoankArticle = ({ match }) => (
  <Page match={match}>
    <StyledSummary>
      <StyledSummaryPane>
        <StyledH1>Improving conversion rate for FinTech startup</StyledH1>
        <StyledParagraph>Since the beginning of 2018 I have been working as a UI/UX designer at Moank, a Fintech startup in Stockholm specializing in consumer loans. My role has involved user research, data analysis as well as design, prototyping and user testing.</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={articleMoankPicture} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>
      <StyledH2>Understanding the problem</StyledH2>
      <StyledParagraph>When I first arrived to Moank I realized based on data analysis and interviews/user testing, that the user experience could be improved. I decided to do a revamp of the website.</StyledParagraph>
      <StyledParagraph>One major issue with the website was the high drop off rate. Several customers who started the sign-up flow dropped off more and more further in the process. The sign-up design was also inconsistent with the rest of the website.</StyledParagraph>
      <StyledParagraph>The reason for the high drop off rate was because the sign-up flow was composed of too many steps – it took too long to finish and the users lost interest during the process.</StyledParagraph>
      <StyledParagraph>Shortening the process and changing the design to the image that Moank wants to give; a modern and serious tech company, led to an increased conversion rate.</StyledParagraph>

      <img src={PortfolioExample} />

      <StyledH2>Personal page</StyledH2>
      <StyledParagraph>Another problem with the previous website was the personal page; it consisted of one single page displaying a lot of information – hence, a lot of scrolling. Interviews and tests showed that the personal page was not really easy to understand and was lacking critical information.</StyledParagraph>
      <StyledParagraph>I also asked the rest of the employees at the company what their biggest problems that affect their job or user experience was. The customer support department told me that customers called the company every day to ask if they were on time or not with their payments.</StyledParagraph>
      <StyledParagraph>In the new version, the personal page is built up by a dashboard, something that is very trendy now. The dashboard both makes it easier for the user to get information at-a-glance, and also saves time as it got rid of the scrolling. I also added a feature telling the customer if they are on time or not with their payments. This feature both gave the information to the user that they requested, while also relieving the customer support.</StyledParagraph>
    </StyledPost>
  </Page>
);

export default MoankArticle;
