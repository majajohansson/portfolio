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
      <StyledParagraph>For the past 3 years (it’s now 2022) I’ve been working with the Double diamond process. In the first phase, Discover and Define, we focus on expanding the scope of the problem. Following, converging to define the challenges. In the second phase, Design and Deliver, we explore several different ways to solve the challenges. Lastly, converging to one solution.</StyledParagraph>
      <StyledParagraph>I use this process when designing new features or improving existing ones. I prefer to involve several different roles in the process to get all point of views, and good ideas can come from anywhere. Throughout the process, I work closely with engineers to come up with solutions together.</StyledParagraph>
      <StyledParagraph>The key during this whole process is to involve users. In the first phase I drive quantative and qualitative research such as surveys and interviews to find the needs and attitudes of the users. In the second phase I focus more on user testing the different solutions.</StyledParagraph>
      <StyledParagraph>This is not a linear process, almost always I repeat parts of the process, or the whole process to come up with the right solution.</StyledParagraph>
    </StyledPost>
  </Page>
);

export default DoubleDiamond;
