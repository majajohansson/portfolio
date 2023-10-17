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

import designersWayOfWorking from '../../assets/designers_ways_of_working.png';

const OrganiseDesignTeam = ({ match }) => (
  <Page match={match}>
    <StyledSummary>
      <StyledSummaryPane>
        <StyledH1>Ways to organise designers in a Tech company</StyledH1>
        <StyledParagraph>In this project, we explored innovative ways to organise design teams within a tech company undergoing a significant transformation. The goal was to enhance collaboration, streamline workflows, and optimise design processes for maximum efficiency and creativity.</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={designersWayOfWorking} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>
      <StyledH2>The background</StyledH2>
      <StyledParagraph>In my previous role at a Swedish FinTech neobank, I gained valuable experience during a tech department reorganisation. Previously, our teams were siloed into iOS, Android, and Backend units. The objective was to transition to more cross-functional teams led by Product owners. During this restructuring, we considered how to best organise the design team within this new framework. Our research highlighted two prevailing industry trends: the 'self-contained cross-functional teams' model and the 'internal design agency' model.</StyledParagraph>
      <StyledParagraph>Self-contained cross-functional teams: This approach involves creating teams that possess all the necessary knowledge to design and develop products independently. In this setup, individual designers join specific teams, fostering a strong sense of ownership and close collaboration among engineers, designers, and product owners. It draws inspiration from the concept of establishing self-sufficient startups within a larger organisation.</StyledParagraph>
      <StyledParagraph>Internal design agency: The internal design agency model retains all designers within a central design team, functioning as an in-house agency. Product owners from various engineering teams engage the design team for specific projects, which includes delivering outcomes like user research and wireframes. This approach aims to enhance design efficiency by enabling designers to work collaboratively on problem-solving. It also encourages product owners to plan the design phase ahead of the development phase, leading to smoother implementation.</StyledParagraph>

      <StyledH2>Our experience</StyledH2>
      <StyledParagraph>After experimenting with both models, we ultimately found that the internal design agency setup was the better fit for our circumstances, for several reasons:</StyledParagraph>
      <ul>
        <li>Workload for designers varied significantly across teams, making it challenging to maintain a consistent workflow. The agency model allowed us to streamline design initiatives, ensuring a more even workload.</li>
        <li>At our startup, a cohesive design and brand identity had not yet been fully established across the organization. Operating as a small design agency facilitated alignment of designs across all platforms.</li>
        <li>Designers who rotated between teams gained insights into multiple products, spreading knowledge throughout the company.</li>
      </ul>

      <StyledH2>My Recommendations</StyledH2>
      <StyledParagraph>Based on this experience, I recommend the internal design agency model for smaller companies. It enables an efficient design process while remaining adaptable to fluctuating workloads.<br />Conversely, I believe the self-contained cross-functional teams model is better suited for larger organisations with multiple designers. Assigning two or more designers to each cross-functional team can enhance efficiency, effectively creating small design agencies within each team. This approach harnesses the benefits of an internal agency while maintaining scalability.</StyledParagraph>
    </StyledPost>
  </Page>
);

export default OrganiseDesignTeam;
