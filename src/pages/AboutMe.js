import React from 'react';
import { Page } from '../ui';
import {
  StyledParagraph,
  StyledContact,
  StyledLink,
  StyledProfile,
  StyledProfileDescription,
} from '../styledComponents';
import profilePicture from '../assets/maja.jpg';

const AboutMe = ({ match }) => (
  <Page match={match}>
    <StyledProfile>
      <img src={profilePicture} />
      <StyledProfileDescription>
        <StyledParagraph>My name is Maja. I’m a product design graduate, currently working as a UI/UX designer at a FinTech Startup in Stockholm. My main focus is user research and UX design.</StyledParagraph>
        <StyledParagraph>Driven by problem solving, I love to design simple and beautiful digital experiences that create real value for end users.</StyledParagraph>
        <StyledParagraph>I like to work closely to customers and I strongly believe that a good design can not be achieved without them. User feedback helps me reflect on my work to improve it and create a better user experience.</StyledParagraph>
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
