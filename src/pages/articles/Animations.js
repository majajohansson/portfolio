import React from 'react';
import { Page } from '../../ui';
import {
  StyledParagraph,
  StyledH1,
  StyledPost,
  StyledSummary,
  StyledSummaryPane,
} from '../../styledComponents';

import hero from '../../assets/animations/animations.png';
import snowLogo from '../../assets/animations/snow_logo.png';
import loginSnowflake from '../../assets/animations/login_snowflake.gif';

const Animations = ({ match }) => (
  <Page match={match}>
    <StyledSummary>
      <StyledSummaryPane>
        <StyledH1>User delight with animations</StyledH1>
        <StyledParagraph>Own initiative to create user delight on login screen</StyledParagraph>
        <StyledParagraph>As the holiday season approached in 2022, I wanted to do something special for our customers: surprise them with a snowfall animation on the login screen. The idea was that this would bring a moment of joy to our customers, as seasonal design elements for fintech and banking apps are not something you often come across in Sweden.</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={hero} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>
      <StyledParagraph>To get started, I quickly sketched out some designs in Figma, showing snow falling on top of the P.F.C. logo. I created a snowflake that matched our brand guidelines. After that, I pitched my idea to my colleagues, who were equally excited and unanimously supported it.</StyledParagraph>
      <StyledParagraph>Once my idea got the green light, I created the snowflake using Illustrator and used After Effects to make it come to life with animation. I made sure to get the speed of the falling snowflakes just right. It was important to strike a balance so that customers had enough time to see it, especially since most people don't spend much time on the login screen before tapping the login button. We also wanted the snowfall to look realistic.</StyledParagraph>
      <StyledParagraph>The snowfall animation and logo enhancement went live for about two months, receiving positive feedback from our users.</StyledParagraph>
      <StyledParagraph>I really enjoyed working on this quick project as it allowed me to improve my animation skills and create a more delightful user experience. It reinforced my belief in the power of thoughtful design to evoke positive emotions and create memorable interactions.</StyledParagraph>
      <img src={loginSnowflake} style={{ maxWidth: '20rem' }} />
      <img src={snowLogo} />
    </StyledPost>
  </Page>
);

export default Animations;
