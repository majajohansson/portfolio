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

const Article = ({ picture, title, slug }) => (
  <StyledArticle background={picture} to={`/article/${slug}`}>
    <StyledH2>{title}</StyledH2>
  </StyledArticle>
);

export default Article;
