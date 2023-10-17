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
        <StyledParagraph>QR codes offer a swift and effortless method for sharing a prototype with colleagues in the office or during a user testing session.</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={qrCodePicture} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>
      <StyledH2>Enhancing User Testing Sessions: A QR code solution</StyledH2>
      <StyledParagraph>User testing sessions often take me beyond the confines of the office. When evaluating websites, a mobile device or computer is essential. Typically, I provide test participants with the necessary device, but there are instances where we conduct quick tests using their own phones. We all know the challenge of navigating someone else's device, especially when it's a different brand. To ensure the utmost accuracy and comfort during user testing, it's vital that participants feel at ease. I strive to eliminate any potential hindrance to their experience, avoiding the complications that come with using someone else's device.</StyledParagraph>

      <StyledH2>The Challenge: "Sharing a link" dilemma</StyledH2>
      <StyledParagraph>One persistent challenge I encountered at user testing sessions was the "Now I have to share a link with you" predicament. I used to request the test participant's email or phone number to send them a link to my prototype. It was a frustrating process for both parties, consuming valuable time and potentially leaving the participant feeling exasperated—a less than ideal first impression. Recognizing the need for an improved user experience, I set out to find a solution.</StyledParagraph>

      <StyledH2>The QR Code solution: streamlining user testing</StyledH2>
      <StyledParagraph>After conducting some research, I couldn't help but wonder why I hadn't thought of it sooner—the QR code. This simple yet effective innovation provided the answer to my quandary. Now, I can conduct user testing sessions anywhere, armed with nothing more than a small piece of paper that participants can effortlessly scan with their phones.</StyledParagraph>
      <StyledParagraph>This approach has proven so successful that I've implemented it within the office as well. I strategically place QR codes throughout the workplace, including the kitchen, enabling colleagues to scan and access prototypes. This open approach to sharing work has garnered overwhelmingly positive feedback. Collaboration thrives when we are aware of what others are working on, and it often leads to fresh ideas and perspectives that we might have otherwise overlooked.</StyledParagraph>
      <img src={qrCodePicture} />
    </StyledPost>

  </Page>
);

export default ImprovedUXArticle;
