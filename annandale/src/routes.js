import React from 'react';
import { Router, Route } from 'react-router';

import { App, Levels, Rules, Schedules, Contact } from './App';

const Routes = (props) => (
  <Router {...props}>
  	<Route path = "/" component={App} />
    <Route path = "home" component={App} />
    <Route path = "levels" component={Levels} />
    <Route path = "rules" component={Rules} />
    <Route path = "schedules" component={Schedules} />
    <Route path = "contact" component={Contact} />
  </Router>
);

export default Routes;