import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.png';
import {
  StyledArticle,
  StyledArticleImage,
  StyledArticleDescription,
  StyledH2,
  StyledLink,
  StyledParagraph,
} from '../styledComponents';

export default ({ picture, title, children, slug }) => (
  <StyledArticle>
    <StyledArticleImage src={picture} />
    <StyledArticleDescription>
      <StyledH2>{title}</StyledH2>
      <StyledParagraph>
        {children}
      </StyledParagraph>
      <StyledParagraph>
        <StyledLink to={`/article/${slug}`}>Read more<img src={arrow} /></StyledLink>
      </StyledParagraph>
    </StyledArticleDescription>
  </StyledArticle>
);
