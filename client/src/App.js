import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import About from './components/pages/About';
import PrivateRoute from './components/routing/PrivateRoute';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './main.scss';

import AuthState from './context/auth/AuthState';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <AuthState>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' to component={Home} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            {/* <Route exact path='/dashboard' to component={Dashboard}></Route> */}
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Fragment>
      </Router>
    </AuthState>
  );
};

export default App;
