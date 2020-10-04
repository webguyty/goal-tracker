import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './componenets/layout/Navbar';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './main.scss';

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Router>
      <Fragment>
        <Navbar />
        <p>Hello World! This is some text.</p>
      </Fragment>
    </Router>
  );
}

export default App;
