import React from 'react';
import { Page } from '../../ui';
import {
  StyledParagraph,
  StyledH1,
  StyledPost,
  StyledSummary,
  StyledSummaryPane,
} from '../../styledComponents';

import howItWorks from '../../assets/howItWorks.svg';
import accountCreditHero from '../../assets/accountCreditHero.svg';
import moanklanetillustration from '../../assets/MoankLanet_illustration.svg';
import debtConsolidationLoan from '../../assets/debtConsolidationLoan.svg';
import aboutMoank from '../../assets/aboutMoank.svg';
import faq from '../../assets/faq.svg';
import VisualDesign from '../../assets/UIDesign.svg';

const VisualDesignArticle = ({ match }) => (
  <Page match={match}>
    <StyledSummary>
      <StyledSummaryPane>
        <StyledH1>Visual Design</StyledH1>
        <StyledParagraph>I love to design simple and beautiful digital experiences that create real value for end users. Here are some of the illustrations I have made lately.</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={VisualDesign} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>
      <StyledParagraph>I love to design simple and beautiful digital experiences that create real value for end users.</StyledParagraph>
      <StyledParagraph>Alongside a few other projects I have been working on during 2018, one major project was a rebranding of a company. During this project I created a brandbook and styleguide, as well as illustrated hero images, icons and other assets for the new look. I love to dig down in Sketch and make pixel perfect design.</StyledParagraph>
      <StyledParagraph>Here are some of the illustrations I made during this project.</StyledParagraph>

      <img src={accountCreditHero} />
      <img src={moanklanetillustration} />
      <img src={debtConsolidationLoan} />
      <img src={howItWorks} />
      <img src={aboutMoank} />
      <img src={faq} />
    </StyledPost>
  </Page>
);

export default VisualDesignArticle;
