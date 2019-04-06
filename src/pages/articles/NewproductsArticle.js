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

import Prototype from '../../assets/Prototype.svg';
import Wireframes from '../../assets/Wireframes.svg';

const NewProductsArticle = ({ match }) => (
  <Page match={match}>
    <StyledSummary>
      <StyledSummaryPane>
        <StyledH1>Releasing new product</StyledH1>
        <StyledParagraph>Releasing new product is a project which started during the fall of 2018. In this project I have been the UX/UI designer and responsible for all aspects of product design, for example designing the process and website, user testing and creating material and presentations for stakeholders, while also improving the current product.</StyledParagraph>
        <StyledParagraph>Team: Me (UX designer), 4 developers, 1 product owner, other stakeholders</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={Prototype} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>
      <StyledH2>Research</StyledH2>
      <StyledParagraph>We began with doing product research and competitor analysis. To study the potential market, I conducted early user interviews and desirability tests. I wanted to learn the needs for a product like this, as well as the pain points with already existing ones.
                      During the research phase we got to know our potential target groups better and how we could improve their everyday life.</StyledParagraph>
      <StyledParagraph>Let me give you an example. Users were positive to a debt consolidation loan. However, the long process of collecting their loans themselves from all their lenders made them unmotivated to even begin. During the competitor analysis we learned that this was indeed the case; every company that offered a debt consolidation loan required the user to collect all their loans themselves.</StyledParagraph>

      <StyledH2>Prototyping</StyledH2>
      <StyledParagraph>We started to come up with potential features and solutions to all our insights. I conducted user testing sessions, first with simple paper sketches and then with more developed wireframes and prototypes. Designs are assumptions until validated with end users. After every interview and user testing session I make, I ask these three questions:</StyledParagraph>
        <ol>
          <li>What are the takeaways from this?</li>
          <li>How could it impact the product?</li>
          <li>How can we use these learnings to improve the product?</li>
        </ol>
        <StyledParagraph>From this reflection, I improve prototypes and test again iteratively.</StyledParagraph>
        <StyledParagraph>I also created user flows to get a clearer picture of all the steps the user could take. Flows are really useful for the whole team as everyone can easily see what needs to be done.</StyledParagraph>
        <StyledParagraph><em>If you are curious, the solution to the long process of getting a debt consolidation loan stated above turned out to be a simple process for us to collect all the loans for the user. The users were very positive about the solution.</em></StyledParagraph>

        <img src={Wireframes} />

        <StyledH2>Implementation</StyledH2>
        <StyledParagraph>I then finalized the design and created all the assets that were needed. The design was then implemented by the developers. We always start with the simplest possible solution, a MVP, and build out. We want to learn as we go, conducting real life usability tests with our users.</StyledParagraph>
        <StyledParagraph>For example, I put up heatmaps and other tools on the website to see how the users were interacting with the website. This does not give me any deep understanding of the users’ behavior, but it can at least give me an idea of the users’ interests in the products.</StyledParagraph>
        <StyledParagraph>Our first MVP page for a debt consolidation loan was a simple landing page containing CTA-buttons. On the heatmaps I could then see how many users that were interacting with this page and clicking on the buttons. The MVP was then built out as we learned more about our users.</StyledParagraph>


      <img src={Prototype} />
    </StyledPost>
  </Page>
);

export default NewProductsArticle;
