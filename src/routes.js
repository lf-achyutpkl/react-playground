import React from 'react';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './views/App';
import Dashboard from './views/Dashboard';
import TodoView from './views/TodoView';

let routes = (
  <Router history={browserHistory}>
    <Route path={'/'} component={TodoView} />
    <Route path={'/dashboard'} component={Dashboard}/>
  </Router>
);

/*
<Router history={browserHistory}>
    <Route path={'/'} component={App}>
      <IndexRoute component={TodoView}/>
      <Route path={'/dashboard'} component={Dashboard}></Route>
    </Route>
  </Router>
*/

export default routes;
