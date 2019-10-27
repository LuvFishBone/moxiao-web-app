import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';

export default () => {
  const supportsHistory = 'pushState' in window.history;
  return (
    <Router forceRefresh={!supportsHistory}>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/solutions" component={Solutions} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
};

