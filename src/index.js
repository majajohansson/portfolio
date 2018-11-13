import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, AboutMe, MoankArticle, MyprocessArticle, NewproductsArticle } from './pages';
import scrollUpOnEnter from './hoc/scrollUpOnEnter';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={scrollUpOnEnter(Home)} />
      <Route exact path="/about-me" component={scrollUpOnEnter(AboutMe)} />
      <Route path="/article/moank" component={scrollUpOnEnter(MoankArticle)} />
      <Route path="/article/myprocess" component={scrollUpOnEnter(MyprocessArticle)} />
      <Route path="/article/newproducts" component={scrollUpOnEnter(NewproductsArticle)} />
    </Switch>
  </BrowserRouter>,
  window.document.getElementById('app'),
);
