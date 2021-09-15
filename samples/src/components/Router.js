import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Type from 'samples/Type';
import Home from 'samples/Home';
import Format from 'samples/Format';
import Merge from 'samples/Merge';

const AppRouter = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <>
          <Route exact path="/" component={Home} />
          <Route exact path="/type" component={Type} />
          <Route exact path="/format" component={Format} />
          <Route exact path="/merge" component={Merge} />
        </>
      </Switch>
    </Router>
  )
}

export default AppRouter;