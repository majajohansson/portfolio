import React from 'react';
import Header from './Header' ;

export default ({ children, match }) => (
  <div>
    <Header match={match} />
    <div className="content">
      {children}
    </div>
  </div>
)
