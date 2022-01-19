import React from 'react';
import { Switch  } from 'react-router-dom';

import Home from '../views/Home';
import Initials from '../views/Initials';
import NotFound from '../views/NotFound';
import Route from './routes';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/initials" component={Initials} />
    <Route component={NotFound} />
  </Switch>
);
export default Routes;
