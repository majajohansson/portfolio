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

import hero from '../../assets/nudgeSuccess/hero.png';
import quickWireframe from '../../assets/nudgeSuccess/quickWireframe.png';
import improvedWireframe from '../../assets/nudgeSuccess/improvedWireframe.png';

const NudgingSuccess = ({ match }) => (
  <Page match={match}>
    <StyledSummary>
      <StyledSummaryPane>
        <StyledH1>Nudging for success</StyledH1>
        <StyledParagraph>Nudging gently guides individuals toward better choices, fostering positive change through subtle, well-planned interventions. In this project, I used nudging to increase the conversion rate to the yearly subscription plan for a joint account feature in the P.F.C. fintech app.</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={hero} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>
      <StyledParagraph>Behavioural science is the study of how humans make choices and decisions. It delves into the workings of our minds, emotions, and motivations.</StyledParagraph>
      <StyledParagraph>Nudging is a gentle and effective tool within this field, where positive changes are encouraged through subtle, well-thought-out interventions. It's like a friendly hand on your back, guiding you towards better decisions without taking away your freedom of choice. It's about creating environments and options that make it easier for individuals to make choices aligned with their own goals, leading to improved outcomes and well-being.</StyledParagraph>
      <StyledH2>Using nudging to increase selection of the yearly subscription plan</StyledH2>
      <img src={quickWireframe} />
      <img src={improvedWireframe} />
      <StyledParagraph>Limited choice: With four distinct subscription plans, we've struck a balance, providing diversity without overwhelming our users with too many options. By restricting the options, the decision-making process becomes easier. It's not about a lack of options; it's about streamlining the path to a choice that feels just right.</StyledParagraph>
      <StyledParagraph>Default effect: To enhance the decision-making process even more, we've thoughtfully pre-selected the 12-month subscription plan. This not only simplifies user choices but also benefits the company by fostering longer customer relationships. It's not about a lack of control; it's about making the experience as effortless as possible. The user is still in the driver's seat and can explore other options if they wish.</StyledParagraph>
      <StyledParagraph>Scarcity: In this situation, the “Limited offer”-badge serves as a time-sensitive revelation, recognising that these subscription plans are genuinely unique and available only for a short window. </StyledParagraph>
      <StyledParagraph>Loss aversion: Through this approach, we're not just highlighting discounts; we're highlighting the missed opportunity for significant savings. We've thoughtfully incorporated this psychology to evoke a sense of urgency, ensuring the user makes choices that protect against perceived loss.</StyledParagraph>
      <StyledParagraph>After implementing these tweaks, it became evident that the vast majority of users opted for the 12-month subscription plan, marking a significant success for the company.</StyledParagraph>
    </StyledPost>
  </Page>
);

export default NudgingSuccess;
