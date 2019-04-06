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

import articleProcessPicture from '../../assets/myProcess.svg';

const MyProcessArticle = ({ match }) => (
  <Page match={match}>
    <StyledSummary>
      <StyledSummaryPane>
        <StyledH1>My UX design process</StyledH1>
        <StyledParagraph>Everyone has different processes to complete a task. I created a schema displaying the process that I am using for the moment when working, and it works really well for me. However, I always like to discover new ways to tackle problems.<br/>Following, is the process I went through during a project at Moank, a FinTech company based in Stockholm.</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={articleProcessPicture} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>
      <StyledH2>Research</StyledH2>
      <StyledParagraph>I usually start a project by doing research. I conduct stakeholder interviews, analyze competitors and speak to potential users. It is important to get a good balance between the business goals and the user’s needs.</StyledParagraph>
      <StyledParagraph>The result of the research phase helps me to create user stories and customer journeys to better understand the target group. The team and I can start brainstorming possible solutions based on the uncovered pain points, needs and motivations.</StyledParagraph>

      <StyledH2>Information Architecture</StyledH2>
        <StyledParagraph>To lay out the basic structure of the product or feature I create simplified user flows. This allows me as well as the team to get a good idea of how big the product is, as well as how to best organize its content.</StyledParagraph>
      <StyledH2>Sketching & Wireframing</StyledH2>
        <StyledParagraph>I start by sketching ideas and simple wireframes using pen and paper. It is good to use a thick pen because it lets you to not focus on details.</StyledParagraph>
        <StyledParagraph>During the sketching phase I often conduct workshops for the whole company where we sketch and do other design games together. I believe design gets better the more people working on it.</StyledParagraph>
      <StyledH2>User testing</StyledH2>
        <StyledParagraph>I also start conducting user testing sessions, first using the simple paper sketches and then with more developed wireframes and prototypes.</StyledParagraph>
        <StyledParagraph>After every interview and user testing session I have, I ask these three questions:</StyledParagraph>
          <ol>
            <li>What are the takeaways from this?</li>
            <li>How could it impact the product?</li>
            <li>How can we use these learnings to improve the product?</li>
          </ol>
      <StyledH2>Product development is an iterative process</StyledH2>
        <StyledParagraph>From the reflection stated above, I improve the prototypes and test again, iteratively. Designs are assumptions until validated with end users. When it does not occur any problems anymore during testing, I finalize the design. I am mostly using Sketch, and share the design with developers using a Sketch plugin called Zeplin.</StyledParagraph>
      <StyledH2>Evaluating</StyledH2>
        <StyledParagraph>Depending on what KPI’s or goals defined in the beginning of the project, evaluation can look different. I do not see design as something final, but rather something that is always changing.</StyledParagraph>

  </StyledPost>
  </Page>
);

export default MyProcessArticle;
