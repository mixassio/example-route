import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
import routes from './src/routes';
import './index.css';
import { mainPath, aboutPath, catalogPath } from './src/helpers/routes';

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

const App = () => (
  <Router>
    <div>
      <ul>
        <li><NavLink exact to={mainPath()}>Main</NavLink></li>
        <li><NavLink to={aboutPath()}>About</NavLink></li>
        <li><NavLink to={catalogPath()}>Catalog</NavLink></li>
      </ul>
      <Switch>
        {routes.map((route, key) => RouteWithSubroutes(route, key))}
      </Switch>
    </div>
  </Router>
);

ReactDom.render(
  <App />,
  document.getElementById('root'),
);
