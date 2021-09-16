import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Type from 'samples/Type';
import Home from 'samples/Home';
import Merge from 'samples/Merge';
import SubSum from 'samples/SubSum';
import Tree from 'samples/Tree';
import ServerPaging from 'samples/ServerPaging';
import Formula from 'samples/Formula';

const AppRouter = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <>
          <Route exact path="/" component={Home} />
          <Route exact path="/type" component={Type} />
          <Route exact path="/merge" component={Merge} />
          <Route exact path="/subsum" component={SubSum} />
          <Route exact path="/tree" component={Tree} />
          <Route exact path="/serverpaging" component={ServerPaging} />
          <Route exact path="/formula" component={Formula} />
        </>
      </Switch>
    </Router>
  )
}

export default AppRouter;