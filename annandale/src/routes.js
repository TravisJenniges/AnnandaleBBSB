import React from 'react';
import { Router, Route } from 'react-router';

import { App, Levels } from './App';

const Routes = (props) => (
  <Router {...props}>
  	<Route path="/" component={App} />
    <Route path="/home" component={App} />
    <Route path= "/levels" component={Levels} />
  </Router>
);

export default Routes;