import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Home, AboutMe, MoankArticle } from './pages';


ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-me" component={AboutMe} />
      <Route path="/article/moank" component={MoankArticle} />
    </Switch>
  </HashRouter>,
  window.document.getElementById('app'),
);
