import React from 'react';
import { Link } from 'react-router-dom';
import { StyledBanner, StyledParagraph, StyledBannerContent } from '../styledComponents';
import ArrowLink from './ArrowLink';
import profilePicture from '../assets/maja.jpg';

const Banner = () => (
  <StyledBanner>
    <img src={profilePicture} />
    <StyledBannerContent>
      <StyledParagraph>Hi! My name is Maja. I’m a product design graduate, currently working as a UI/UX designer at a FinTech Startup in Stockholm.</StyledParagraph>
      <StyledParagraph>
        <ArrowLink to="/about-me">Learn more about me</ArrowLink>
      </StyledParagraph>
    </StyledBannerContent>
  </StyledBanner>
);

export default Banner;
