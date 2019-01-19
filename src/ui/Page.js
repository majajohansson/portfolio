import React from 'react';
import { StyledPage, StyledPageContent } from '../styledComponents';
import Header from './Header';
import Footer from './Footer';

const Page = ({ children, match }) => (
  <StyledPage>
    <Header match={match} />
    <StyledPageContent>
      {children}
    </StyledPageContent>
    <Footer />
  </StyledPage>
);

export default Page;
