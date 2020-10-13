import { BrowserRouter, Switch, Route } from 'react-router-dom';

import React, { lazy } from 'react';
import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'  

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route  path="/" exact component={Landing}/>
      <Route  path="/app" exact component={OrphanagesMap}/>
    </Switch>
    </BrowserRouter>
  );
}

export default Routes;