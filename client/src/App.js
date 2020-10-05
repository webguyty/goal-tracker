import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';

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
          <p>Hello World! This is some text.</p>
        </Fragment>
      </Router>
    </AuthState>
  );
};

export default App;
