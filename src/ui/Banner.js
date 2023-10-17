import React from 'react';
import { Link } from 'react-router-dom';
import { StyledBanner, StyledParagraph, StyledBannerContent, StyledH2 } from '../styledComponents';
import ArrowLink from './ArrowLink';
import profilePicture from '../assets/profile_picture.png';

const Banner = () => (
  <StyledBanner>
    <img src={profilePicture} />
    <StyledBannerContent>
      <StyledH2>UX and Product Designer</StyledH2>
      <StyledParagraph>Hi! My name is Maja. Driven by problem solving, I love to design simple and beautiful digital experiences that create real value for end users.</StyledParagraph>
      <StyledParagraph>
        <ArrowLink to="/about-me">Learn more about me</ArrowLink>
      </StyledParagraph>
    </StyledBannerContent>
  </StyledBanner>
);

export default Banner;
