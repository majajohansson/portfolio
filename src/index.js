import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';


ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-me" component={AboutMe} />
    </Switch>
  </HashRouter>,
  window.document.getElementById('app'),
);
