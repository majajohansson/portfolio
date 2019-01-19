import React from 'react';
import { Page } from '../ui';
import { StyledParagraph, StyledContact, StyledLink } from '../styledComponents';
import profilePicture from '../assets/maja.jpg';

export default ({ match }) => (
  <Page match={match}>
    <div className="profile">
      <img className="profile__picture" src={profilePicture} />
      <div className="profile__description">
        <StyledParagraph>My name is Maja. I’m a product design graduate based in Stockholm looking for a UI/UX designer position.</StyledParagraph>
        <StyledParagraph>Driven by problem solving, I love to design simple and beautiful digital experiences that create real value for end users.</StyledParagraph>
        <StyledParagraph>I like to work closely to customers and I strongly believe that a good design can not be achieved without them. User feedback help me reflect on my work to improve it and create a better user experience.</StyledParagraph>
      </div>
    </div>
    <StyledContact>
      <StyledParagraph>Contact:</StyledParagraph>
      <ul>
        <li>Linkedin: <StyledLink as="a" href="https://www.linkedin.com/in/maja-johansson-998a20135/" target="_blank">Maja Johansson</StyledLink></li>
        <li>Email: <StyledLink as="a" href="mailto:maja.johansson1993@gmail.com">maja.johansson1993@gmail.com</StyledLink></li>
      </ul>
    </StyledContact>
  </Page>
)
