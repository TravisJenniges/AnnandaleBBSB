import React from 'react';
import { Router, Route } from 'react-router';

import { App, Levels, Rules, Schedules, Contact, Coach } from './App';

const Routes = (props) => (
  <Router {...props}>
  	<Route path = "/" component={App} />
    <Route path = "home" component={App} />
    <Route path = "levels" component={Levels} />
    <Route path = "rules" component={Rules} />
    <Route path = "schedules" component={Schedules} />
    <Route path = "contact" component={Contact} />
    <Route path = "coaches%20corner" component={Coach} />
  </Router>
);

export default Routes;