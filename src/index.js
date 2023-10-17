import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Home,
  AboutMe,
  MoankArticle,
  MyprocessArticle,
  NewProductsArticle,
  ImprovedUxArticle,
  VisualDesignArticle,
  ErisLawArticle,
  DesignPrice,
  DoubleDiamond,
  OrganiseDesignTeam,
  PowerDesignThinkingArticle,
  DuoProject,
} from './pages';
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
        <Route path="/article/visual-design" component={scrollUpOnEnter(VisualDesignArticle)} />
        <Route path="/article/myprocess" component={scrollUpOnEnter(MyprocessArticle)} />
        <Route path="/article/qr-code-ux" component={scrollUpOnEnter(ImprovedUxArticle)} />
        <Route path="/article/newproducts" component={scrollUpOnEnter(NewProductsArticle)} />
        <Route path="/article/lawfirm" component={scrollUpOnEnter(ErisLawArticle)} />
        <Route path="/article/design-price" component={scrollUpOnEnter(DesignPrice)} />
        <Route path="/article/double-diamond" component={scrollUpOnEnter(DoubleDiamond)} />
        <Route path="/article/duo-project" component={scrollUpOnEnter(DuoProject)} />
        <Route path="/article/organise-design-team" component={scrollUpOnEnter(OrganiseDesignTeam)} />
        <Route path="/article/power-design-thinking-cryptocurrency" component={scrollUpOnEnter(PowerDesignThinkingArticle)} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>,
  window.document.getElementById('app'),
);
