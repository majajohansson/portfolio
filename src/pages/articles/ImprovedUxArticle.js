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

import qrCodePicture from '../../assets/QRcode-picture.svg';

const ImprovedUXArticle = ({ match }) => (
  <Page match={match}>
    <StyledSummary>
      <StyledSummaryPane>
        <StyledH1>How I improved the user experience of my user testing sessions</StyledH1>
        <StyledParagraph>This is how I improved the user experience of my user testing sessions outside of the office.</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={qrCodePicture} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>
      <StyledParagraph>Sometimes I do user testing sessions with potential users outside of the office. Since I am testing a website, a phone or a computer is required. Usually, I provide the test person with a computer or phone, but sometimes we do quick tests using their own phone. We all know that it can be tricky to use someone else’s phone, especially if it is another brand that we are not used to. To have the best and most accurate result of the user testing it is important that the test person feels comfortable and calm. I do not want the confusion of testing someone else’s phone to get in the way of the result.</StyledParagraph>

      <StyledH2>The problem</StyledH2>
      <StyledParagraph>A problem that always occcurred when I arrived at a user testing session was the “Now I have to share a link with you”-problem. I used to ask the test person for their email or phone number so I could send them the link to my prototype. It was annoying for both of us and took a lot of time. It could also make the test person feel frustrated and not have a good first impression of the session. I understood I had to improve the user experience of my user testing sessions.</StyledParagraph>

      <StyledH2>The solution</StyledH2>
      <StyledParagraph>After some research, I could not even understand why I had not thought about it before; the QR-code. This gave me the solution to my problem. Now I could go anywhere to test my prototype with a small piece of paper for people to scan with their phones.</StyledParagraph>
      <img src={qrCodePicture} />
    </StyledPost>

  </Page>
);

export default ImprovedUXArticle;
