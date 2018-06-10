import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Home, AboutMe, MoankArticle } from './pages';
import scrollUpOnEnter from './hoc/scrollUpOnEnter';


ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={scrollUpOnEnter(Home)} />
      <Route exact path="/about-me" component={scrollUpOnEnter(AboutMe)} />
      <Route path="/article/moank" component={scrollUpOnEnter(MoankArticle)} />
    </Switch>
  </HashRouter>,
  window.document.getElementById('app'),
);
