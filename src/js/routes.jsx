import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { Header } from './common/components/Header';
import ExampleRouteHandler from './views/example';

import '../assets/fonts/fonts.css';

const HeaderWithRouter = withRouter(props => <Header {...props} />);

module.exports = (
  <div className="container">
    <HeaderWithRouter />
    <hr />
    <div className="container__content">
      <Switch>
        <Route exact path="/" component={ExampleRouteHandler} />
        <Route path="*" component={ExampleRouteHandler} />
      </Switch>
    </div>
  </div>
);
