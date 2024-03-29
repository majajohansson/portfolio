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

import crypto from '../../assets/powerDesignThinking/crypto_teaser.png';
import ideationThemes from '../../assets/powerDesignThinking/crypto_ideation_themes.png';
import insightsNeeds from '../../assets/powerDesignThinking/crypto_insights_needs.png';
import interviewPrep from '../../assets/powerDesignThinking/crypto_interview_prep.png';
import pushNotifications from '../../assets/powerDesignThinking/crypto_push_notifications.png';
import userGroups from '../../assets/powerDesignThinking/crypto_user_groups.png';
import wireframing from '../../assets/powerDesignThinking/crypto_wireframing.png';
import finalBuy from '../../assets/powerDesignThinking/crypto_final_prototype_buy.png';
import finalDetails from '../../assets/powerDesignThinking/crypto_final_prototype_details.png';
import finalIntro from '../../assets/powerDesignThinking/crypto_final_prototype_intro.png';
import finalPortfolio from '../../assets/powerDesignThinking/crypto_final_prototype_portfolio.png';

const PowerDesignThinkingArticle = ({ match }) => (
  <Page match={match}>
    <StyledSummary>
      <StyledSummaryPane>
        <StyledH1>The power of design thinking in the world of cryptocurrency</StyledH1>
        <StyledParagraph>Goal: Craft a solution that enables effortless buying and selling of cryptocurrencies, catering to our target audience while aligning seamlessly with our core investment principles.</StyledParagraph>
        <StyledParagraph>Team: 1 service designer, 2 UX/UI designers (including me), 1 product owner & 1 developer</StyledParagraph>
        <StyledParagraph>Time: 6 weeks during 2022</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={crypto} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>
      <StyledH2>Early ideas and interviews</StyledH2>
      <StyledParagraph>To kick-off the project, we started by doing competitor research. We also tried out different crypto apps and had a chat with a blockchain expert to learn more about how it all works. After that we gathered for a brainstorming session to list all the important questions we had about potential crypto customers. We wanted to understand their money habits as well as how familiar they were with cryptocurrencies and what they thought about them. Using our interview template, we conducted 20 user interviews, mostly with our existing customers.</StyledParagraph>
      <StyledParagraph>This all-around approach gave us a full picture of what our target audience in the crypto world wants, likes and their current behaviour. It's the solid base for all the design choices we're making.</StyledParagraph>

      <img src={interviewPrep} />

      <StyledH2>Analysing and “How might we” questions</StyledH2>
      <StyledParagraph>Upon analyzing the interviews, we identified four distinct user groups, each with unique investment needs and attitudes. One user group aligned with both technical requirements and the company's design principles. For two other user groups, there was potential interest, prompting us to continue further investigation as there could be similarities in their needs.</StyledParagraph>
      <StyledParagraph>We formulated a series of "How might we" questions tailored to the specific needs of each group, which served as the foundation for our ideation process.</StyledParagraph>
      <StyledParagraph>The user groups we decided to explore further, along with their respective design themes, are as follows:</StyledParagraph>
      <ol>
        <li>Curious Investor: Focusing on an educational approach.</li>
        <li>Clueless: Exploring gamification elements.</li>
        <li>Fintech Geeks: Emphasizing straightforward solutions.</li>
      </ol>
      <StyledParagraph>This strategic segmentation and thematic approach allowed us to tailor our design solutions precisely to the unique requirements and preferences of each user group, ensuring a more targeted and user-centric experience.</StyledParagraph>

      <img src={userGroups} />
      <img src={ideationThemes} />

      <StyledH2>Wireframes and interview round 2</StyledH2>
      <StyledParagraph>Guided by the "How might we" questions, we charted the customer journey for each user group. This journey contained essential steps such as app login, crypto feature discovery, and active participation in buying, holding, and selling cryptocurrencies. To bring these journeys to life, I crafted wireframes that aligned with the unique needs and themes of each user group. Our commitment to user-centricity led us to another round of interviews, where we tested our concepts and design ideas.</StyledParagraph>

      <img src={wireframing} />

      <StyledH2>Prototype and business case</StyledH2>
      <StyledParagraph>Our discovery revealed that the Curious Investor user group not only aligned seamlessly with our investment principles but also represented a significant portion of our target product audience. Therefore, we made a strategic decision to tailor the crypto feature to meet this group's specific needs. In parallel, we developed a comprehensive business case and engaged in negotiations with potential partner companies.</StyledParagraph>
      <StyledParagraph>This strategic alignment with our user group and the robust business groundwork set the stage for a crypto feature that would not only resonate with our core audience but also contribute to the overall success of our product.</StyledParagraph>

      <img src={insightsNeeds} />

      <StyledH2>Final prototype</StyledH2>
      <StyledParagraph>Following is the final prototype that we delivered for this concept project.</StyledParagraph>
      <img src={finalIntro} />
      <img src={finalBuy} />
      <img src={finalDetails} />
      <img src={finalPortfolio} />
      <img src={pushNotifications} />

      <StyledParagraph>After aligning our crypto feature with the needs of the Curious Investor user group and securing valuable partnerships, I created a full-fledged prototype. Extensive rounds of user testing refined our ideas, paving the way for an MVP version that our dedicated development team brought to life.</StyledParagraph>
      <StyledParagraph>Today, I am happy to report that our crypto feature is now live in the app, delighting users and beginning to generate substantial revenue.</StyledParagraph>
      <StyledParagraph>This project stands as a testament to our commitment to user-centric design, demonstrating the transformative power of design thinking in the world of cryptocurrency.</StyledParagraph>
    </StyledPost>
  </Page>
);

export default PowerDesignThinkingArticle;
