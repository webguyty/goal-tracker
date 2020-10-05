import React, { useEffect, Fragment, useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';

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
          <div className='container'>
            <Switch>
              <Route exact path='/' to component={Home}></Route>
              <Route exact path='/dashboard' to component={Dashboard}></Route>
              <Route exact path='/login' component={Login}></Route>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </AuthState>
  );
};

export default App;
