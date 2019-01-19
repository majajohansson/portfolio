import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, AboutMe, MoankArticle, MyprocessArticle, NewProductsArticle } from './pages';
import scrollUpOnEnter from './hoc/scrollUpOnEnter';
import GlobalStyle from './styledComponents/GlobalStyle';


ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={scrollUpOnEnter(Home)} />
        <Route exact path="/about-me" component={scrollUpOnEnter(AboutMe)} />
        <Route path="/article/moank" component={scrollUpOnEnter(MoankArticle)} />
        <Route path="/article/myprocess" component={scrollUpOnEnter(MyprocessArticle)} />
        <Route path="/article/newproducts" component={scrollUpOnEnter(NewProductsArticle)} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>,
  window.document.getElementById('app'),
);
