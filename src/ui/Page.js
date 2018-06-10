import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default ({ children, match }) => (
  <div>
    <Header match={match} />
    <div className="content">
      {children}
    </div>
    <Footer />
  </div>
)
