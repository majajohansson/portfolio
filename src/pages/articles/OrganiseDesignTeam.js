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
        <StyledParagraph>I believe that organising people in an efficient way is at least as important as selecting the best people for the task.</StyledParagraph>
        <StyledParagraph>This is why I always try to learn as much as I can about the different ways people can organise themselves to accomplish a project together, especially around product development since this is where I have the most experience.</StyledParagraph>
      </StyledSummaryPane>
      <StyledSummaryPane>
        <img src={designersWayOfWorking} />
      </StyledSummaryPane>
    </StyledSummary>
    <StyledPost>
      <StyledH2>The background</StyledH2>
      <StyledParagraph>While working for a Swedish FinTech neobank, we went across a reorganisation of the tech department. We used to work in siloed teams of iOS, Android and Backend. The goal was to move towards more cross functional teams led by a Product owner. During that reorganisation we asked ourselves how the design team should be organised within the new setup. After reading about how others were doing we highlighted two main trends in the industry: the <em>self contained cross functional teams setup</em> and the <em>internal design agency setup</em>.</StyledParagraph>

      <StyledH2>Self contained cross functional teams</StyledH2>
      <StyledParagraph>The <em>self contained cross functional teams setup</em> consists of following the principle of having teams that have all the knowledge necessary to design and develop products that the specific team is responsible for. This would mean that our design team would split and a designer would join a team. The goal of this setup is to have a strong sense of ownership of the products produced by the team and to encourage close collaboration between the engineers, designer and product owner. It is inspired from the philosophy of creating a small, self sufficient startup within the larger organisation.</StyledParagraph>

      <StyledH2>Internal design agency</StyledH2>
      <StyledParagraph>The <em>internal design agency setup</em> on the other hand consists of keeping all the designers together in their own design team and making them act as an internal design agency. The product owners from the different engineering teams order design projects from the design team that will then deliver results such as user research and wireframes. The goal of this setup is to increase the design efficiency by allowing designers to work together to solve the design problems. It also encourages the product owners to plan the design phase in advance of the development phase which usually results in smoother implementation experiences.</StyledParagraph>

      <StyledH2>Our experience</StyledH2>
      <StyledParagraph>After trying to split the designers into cross functional teams for a little while we eventually settled for the <em>internal design agency setup</em>. It seemed best suited for our situation based on several reasons:</StyledParagraph>
      <ul>
        <li>The workload in each of the teams was very irregular from the designer’s perspective. Some weeks were really intense when designing features, whereas other weeks were calm with nothing to do for the designers while the developers were busy implementing the new feature. Working as an agency helped us solve that problem as all the design initiatives go through the design team which makes it easier to plan them to have a regular workload.</li>
        <li>At this young startup, the design and brand identity was not yet clearly established across the whole company. Working as a small design agency made it much easier for us designers to align our different designs over all platforms.</li>
        <li>When us designers moved around between teams, we got knowledge about several products rather than always focusing on one teams’ specific responsibility area. That way we spread the knowledge throughout the company.</li>
      </ul>

      <StyledH2>My takeaways</StyledH2>
      <StyledParagraph>Based on this experience, I would recommend the <em>design agency setup</em> for smaller companies as it could help having an efficient design process while keeping it flexible to varying workloads.<br />The <em>self contained cross functional teams setup</em> however I believe is more suitable for larger organisations with many designers. Putting two or more designers in each cross functional team can then be more efficient. Having several designers in each cross functional team helps to keep the benefits of the design agency within the several teams setup. Then you would create a small design agency within each of these cross functional teams.</StyledParagraph>
    </StyledPost>
  </Page>
);

export default OrganiseDesignTeam;
