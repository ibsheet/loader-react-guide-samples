import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Hello from 'samples/Hello';
import Home from 'samples/Home';
import Format from 'samples/Format';

const AppRouter = ({}) => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/hello">
            <Hello />
          </Route>
          <Route exact path="/format">
            <Format />
          </Route>
        </>
      </Switch>
    </Router>
  )
}

export default AppRouter;