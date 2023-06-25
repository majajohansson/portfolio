import React from 'react';
import { Page } from '../ui';
import {
  StyledParagraph,
  StyledContact,
  StyledLink,
  StyledProfile,
  StyledProfileDescription,
} from '../styledComponents';
import profilePicture from '../assets/profile_picture.png';

const AboutMe = ({ match }) => (
  <Page match={match}>
    <StyledProfile>
      <img src={profilePicture} />
      <StyledProfileDescription>
        <StyledParagraph>My name is Maja. I'm a UX/UI Designer with a strong passion for creating exceptional user experiences. With a bachelor's degree in Engineering in Design and Product development from Linköpings University, I have honed my skills over six years in the dynamic field of UX design, primarily within the Fintech industry.</StyledParagraph>
        <StyledParagraph>Proficient in the entire customer journey, I have expertise in all stages of the design process, from user research to delivering polished final products. I am a self-driven professional who takes ownership of projects and effectively leads teams through each step.</StyledParagraph>
        <StyledParagraph>My goal as a UX Designer is to design experiences that excel expectations, where users feel delighted, empowered, and able to accomplish their goals seamlessly. </StyledParagraph>
        <StyledParagraph>If you are seeking a dedicated and versatile UX Designer who brings expertise, empathy, and a track record of successful projects to the table, I would be thrilled to connect and discuss how I can contribute to your organization.</StyledParagraph>
      </StyledProfileDescription>
    </StyledProfile>
    <StyledContact>
      <StyledParagraph>Contact:</StyledParagraph>
      <ul>
        <li>Linkedin: <StyledLink as="a" href="https://www.linkedin.com/in/maja-johansson-998a20135/" target="_blank">Maja Johansson</StyledLink></li>
        <li>Email: <StyledLink as="a" href="mailto:contact@johanssonmaja.com">contact@johanssonmaja.com</StyledLink></li>
      </ul>
    </StyledContact>
  </Page>
);

export default AboutMe;
