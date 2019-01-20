import React, { Component } from 'react';
import { StyledPage, StyledPageContent } from '../styledComponents';
import Header from './Header';
import Footer from './Footer';

class Page extends Component {
  constructor(props) {
    super(props);
    this.pageRef = React.createRef();
  }

  render() {
    const { children, match } = this.props;

    return (
      <StyledPage ref={this.pageRef}>
        <Header match={match} pageRef={this.pageRef} />
        <StyledPageContent>
          {children}
        </StyledPageContent>
        <Footer />
      </StyledPage>
    );
  }
}

export default Page;
