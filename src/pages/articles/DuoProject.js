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

import hero from '../../assets/duoProject/hero.png';
import insights from '../../assets/duoProject/insights.png';
import steps from '../../assets/duoProject/steps.png';
import home from '../../assets/duoProject/home.png';
import notification from '../../assets/duoProject/notification.png';

const DuoProject = ({ match }) => (
  <Page match={match}>
    <StyledSummary>
      <StyledSummaryPane>
        <StyledH1>Unlocking possibilities: Redefining joint accounts  </StyledH1>
        <StyledParagraph>Tools that help couples handle their joint finances was the most asked for feature in 2020 from our customers at P.F.C., a fintech user-friendly neobank app. The concept team and I was tasked with designing a solution to their needs; a subscription based feature that lets couples handle their joint economy in a hassle free way.</StyledParagraph>
        <StyledParagraph>5 weeks during 2021</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={hero} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>
      <StyledH2>Understanding the problem</StyledH2>
      <StyledParagraph>Following the double diamond design process, we began by researching banks that offer joint accounts. Most big banks provide this service, but our early findings revealed that opening accounts with them can involve a lot of paperwork. We recognised a need in the market for a faster and more straightforward account-opening solution. At the same time, we created a set of questions for interviews and started talking to potential joint account customers. These conversations helped us refine our early ideas based on their feedback.</StyledParagraph>
      <StyledParagraph>We examined two distinct solutions:</StyledParagraph>
      <ol>
        <li>A joint account could provide an extra plastic card linked to the joint account, similar to what most services offer.</li>
        <li>Alternatively, it could offer the flexibility to switch which individual account the same card is connected to.</li>
      </ol>
      <img src={insights} />
      <StyledH2>Ideating the solution</StyledH2>
      <StyledParagraph>Building upon the issues we identified in the initial phase, we framed "How might we" questions to guide the creation of wireframes. Our primary focus was on finding solutions that didn't involve introducing an additional plastic card for our customers. We iterated and conducted another round of interviews to gather user feedback.</StyledParagraph>
      <StyledParagraph>Having a developer as part of our concept team proved invaluable. Their input early on allowed us to assess the feasibility of our ideas, especially since the product is quite intricate and involves financial aspects. Additionally, we maintained an ongoing dialogue with our legal department due to the numerous regulations governing this type of product.</StyledParagraph>
      <StyledH2>Refinement</StyledH2>
      <StyledParagraph>We crafted interactive prototypes and subjected them to user testing to ensure that our solution aligns with our high standards for creating a user-friendly app.</StyledParagraph>
      <StyledParagraph>We strongly believe in the value of early releases to gather feedback, and this initial iteration, which we released, successfully addressed most of the user requirements.</StyledParagraph>
      <img src={steps} />
      <StyledParagraph>Only 3 steps to invite someone to a joint account?! Yes, we thought it was amazing too.</StyledParagraph>
      <StyledParagraph>Upon logging into the app, our customers immediately have a clear view of their two accounts: Solo and Duo, along with their individual balances, addressing their need for a private account. To streamline the process of using just one plastic card, we introduced a simple toggle feature. This enables users to effortlessly switch between the accounts they wish to link with the card.</StyledParagraph>
      <img src={home} />
      <StyledParagraph>After the first release, we tracked funnels and I worked closely with customer support to understand what our customers were saying about our new feature.</StyledParagraph>
      <StyledParagraph>Read my article on how I used simple nudging techniques to significantly enhance our conversion rates for Duo subscriptions.</StyledParagraph>
      <img src={notification} />
    </StyledPost>
  </Page>
);

export default DuoProject;
