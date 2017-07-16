import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/Home';
import AboutPage from './routes/About/about';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/home" component={IndexPage} />
      <Route path="/about" component={AboutPage} />
    </Router>
  );
}

export default RouterConfig;
