import React from 'react';
import { Switch  } from 'react-router-dom';

import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Route from './routes';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
);
export default Routes;
