import React from 'react';
import { Page } from '../../ui';
import {
  StyledParagraph,
  StyledH1,
  StyledPost,
  StyledSummary,
  StyledSummaryPane,
} from '../../styledComponents';

import doubleDiamond from '../../assets/Double_diamond.png';

const DoubleDiamond = ({ match }) => (
  <Page match={match}>
    <StyledSummary>
      <StyledSummaryPane>
        <StyledH1>The Double Diamond process</StyledH1>
        <StyledParagraph>When designing new features or improving existing ones, I follow the Double diamond process; a process to find the right problem and the right solution.</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={doubleDiamond} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>
      <StyledParagraph>I have extensive experience applying the Double Diamond process in my work. This approach involves two main phases: Discover and Define, followed by Design and Deliver.<br />In the Discover and Define phase, our primary goal is to broaden our understanding of the problem space before narrowing down to define the specific challenges we need to address.<br />Moving into the Design and Deliver phase, we explore a range of potential solutions for these challenges, ultimately converging on the most effective one.</StyledParagraph>
      <StyledParagraph>I believe in a collaborative approach, which means engaging various team members with diverse perspectives. Valuable insights and ideas can originate from any role. Throughout this journey, close collaboration with engineers is essential, as it helps us develop solutions together.</StyledParagraph>
      <StyledParagraph>User involvement remains central throughout the entire process. During the initial phase, I conduct both quantitative and qualitative research, leveraging methods such as surveys and interviews to unearth user needs and attitudes. In the latter phase, my focus shifts to rigorous user testing of different solutions to ensure they truly meet user expectations.</StyledParagraph>
      <StyledParagraph>It's important to note that this process isn't strictly linear. I often find it necessary to revisit certain phases or even the entire process as we iterate towards the optimal solution.</StyledParagraph>
      <img src={doubleDiamond} />
    </StyledPost>
  </Page>
);

export default DoubleDiamond;
