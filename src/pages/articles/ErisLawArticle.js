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
        <StyledParagraph>In this project, I worked with research, information architecture, visual design and creating mockups.</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={ErisLawPicture} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>

      <StyledH2>Kick-off</StyledH2>
      <StyledParagraph>I started by conducting interviews. I wanted to know the business goals as well as learn more about the users. The law firm is for companies and not private people, which was a fun and new challenge for me.</StyledParagraph>

      <StyledH2>Prototyping</StyledH2>
      <StyledParagraph>When I had gotten to know the end users better and what their needs were, I created a site map. It helped me to see all the pages that I would need to design.</StyledParagraph>
      <StyledParagraph>I created prototypes made out of simple wireframes to start testing with users. The prototypes were improved and tested again iteratively.</StyledParagraph>
      <StyledParagraph>When we had a good frame for the whole website I started to put colours, typography and other visuals into place. I created several designs with different themes to choose between. We also asked around to hear which design other people preferred.</StyledParagraph>
      <StyledParagraph>When everything was set it was implemented by developers.</StyledParagraph>
      <img src={ErisLawPictureZoom} />
    </StyledPost>

  </Page>
);

export default ErisLawArticle;
