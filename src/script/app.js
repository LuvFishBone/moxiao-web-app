import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Solution from './pages/Solution';
import JoinUs from './pages/JoinUs';
import ContactUs from './pages/ContactUs';
import Jobs from './pages/Jobs';
import News from './pages/News';
import ArticleDetail from './pages/ArticleDetail';

// home  products  solution news joinUs contactUs jobs articleDetail
export default () => {
  const supportsHistory = 'pushState' in window.history;
  return (
    <Router forceRefresh={!supportsHistory}>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/solution" component={Solution} />
        <Route exact path="/joinUs" component={JoinUs} />
        <Route exact path="/contactUs" component={ContactUs} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/news" component={News} />
        <Route exact path="/articleDetail/:id" component={ArticleDetail} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
};

