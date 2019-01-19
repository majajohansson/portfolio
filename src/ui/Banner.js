import React from 'react';
import { Link } from 'react-router-dom';
import { StyledBanner, StyledParagraph, StyledBannerContent } from '../styledComponents';
import ArrowLink from './ArrowLink';
import profilePicture from '../assets/maja.jpg';

export default () => (
  <StyledBanner>
    <img src={profilePicture} />
    <StyledBannerContent>
      <StyledParagraph>Hi! My name is Maja. I’m a product design graduate based in Stockholm looking for a UI/UX designer position.</StyledParagraph>
      <StyledParagraph>
        <ArrowLink to="/about-me">Learn more about me</ArrowLink>
      </StyledParagraph>
    </StyledBannerContent>
  </StyledBanner>
);
