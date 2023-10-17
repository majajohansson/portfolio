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

import ErisLawPicture from '../../assets/ErisLaw_article_image.png';
import ErisLawPictureZoom from '../../assets/ErisLawZoom.svg';

const ErisLawArticle = ({ match }) => (
  <Page match={match}>
    <StyledSummary>
      <StyledSummaryPane>
        <StyledH1>Web design for Eris Law Advokatbyrå in central Stockholm</StyledH1>
        <StyledParagraph>In this project, I revamped a law firm's website to cater to corporate clients, emphasizing user-centric design and iterative prototyping.</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={ErisLawPicture} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>

      <StyledH2>Kick-off and User Research</StyledH2>
      <StyledParagraph>The project began with a series of insightful interviews aimed at gaining a comprehensive understanding of both the law firm's business objectives and the unique needs of its corporate clientele. Working with businesses rather than private individuals presented an exciting and new challenge for me.</StyledParagraph>

      <StyledH2>Prototyping and Iteration</StyledH2>
      <StyledParagraph>To plan out the website's structure, I created a clear map of all the important pages that needed attention. I made simple wireframe prototypes for initial testing with users. We kept improving these prototypes based on user feedback, getting us closer to a design that worked well.</StyledParagraph>
      <StyledParagraph>As we got a clearer vision for the whole website, I added detailed visual elements like colors, fonts, and infographics. We made a few different design themes, so we could choose the one that our users liked best based on their feedback.</StyledParagraph>

      <StyledH2>Implementation</StyledH2>
      <StyledParagraph>Upon finalizing the design and securing user approval, our collaborative efforts transitioned to the implementation phase, where dedicated developers brought our vision to life, ensuring a seamless and functional web presence. This streamlined approach, from in-depth research and prototyping to iterative design and implementation, allowed us to create a user-centric, visually appealing, and highly functional website tailored to the specific needs of corporate clients.</StyledParagraph>
      <img src={ErisLawPictureZoom} />
    </StyledPost>

  </Page>
);

export default ErisLawArticle;
