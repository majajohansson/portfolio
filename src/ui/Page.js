import React from 'react';
import Header from './Header' ;

export default ({children}) => (
  <div>
    <Header />
    <div className="content">
      {children}
    </div>
  </div>
)
