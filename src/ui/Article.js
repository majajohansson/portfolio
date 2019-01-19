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
import ArrowLink from './ArrowLink';

const Article = ({ picture, title, children, slug }) => (
  <StyledArticle>
    <StyledArticleImage src={picture} />
    <StyledArticleDescription>
      <StyledH2>{title}</StyledH2>
      <StyledParagraph>
        {children}
      </StyledParagraph>
      <StyledParagraph>
        <ArrowLink to={`/article/${slug}`}>Read more</ArrowLink>
      </StyledParagraph>
    </StyledArticleDescription>
  </StyledArticle>
);

export default Article;
