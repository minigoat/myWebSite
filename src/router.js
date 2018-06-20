import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
  const portal = dynamic({
    app,
    component: () => import('./routes/portal')
  });
  // const notFound = dynamic({
  //   app,
  //   component: () => import('./routes/404')
  // });
  return (
    <Router history={history}>
      <Switch>
        <Redirect from="/" to="/portal" exact push />
        <Route path="/portal" exact component={portal} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
