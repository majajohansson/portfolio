import React from 'react';
import { Page } from '../../ui';
import { StyledParagraph, StyledH1, StyledH2, StyledPost } from '../../styledComponents';

import articleProcessPicture from '../../assets/process.png';

export default ({ match }) => (
  <Page match={match}>
    <StyledPost>
      <StyledH1>My UX design process</StyledH1>
      <img src={articleProcessPicture} />
      <StyledParagraph>Everyone has different processes to complete a task. I created a schema displaying the process that I am using for the moment when working, and it works really well for me. However, I always like to discover new ways to tackle problems.<br/>Following, is the process I went through during a project at Moank, a FinTech company based in Stockholm.</StyledParagraph>

      <StyledH2>The start</StyledH2>
      <StyledParagraph>I always start a process drawing sketches with pen and paper. I do not like to dive into Sketch directly as things often change and I do not want to lose time re-doing my wireframes all the time. In this project there was no existing product to do user testing with in this stage (to reveal problems), which is otherwise what I would have done. Instead, a lot of time was spent on analyzing competitors. I wanted to see the market as well as get inspiration and ideas.</StyledParagraph>

      <StyledH2>Prototyping and iterations</StyledH2>
      <StyledParagraph>Comfortable with the market and with a lot of ideas, I started drawing more detailed sketches and flows to share with stakeholders. I like to keep this stage very iterative; creating mockups and letting people try them, and then improve the mockups. In this project, I created interactable mockups using a plugin for Sketch called Mirr.io. When we had decided for the final layout, I turned back to Sketch to create pixel perfect design images with details like colours, icons, spaces and text using guidelines I set in my previous project at Moank. I like to try new software to find ones I like more, so in this project I wanted to try Zeplin, a tool to share designs with developers.</StyledParagraph>
      <StyledParagraph>During the whole process, parts of the design has been implemented and is still being implemented. Currently, I am still working on finalizing all the new products. Pictures will be added soon. If you want to hear more, I am happy to describe more in detail about this project.</StyledParagraph>
    </StyledPost>
  </Page>
);
