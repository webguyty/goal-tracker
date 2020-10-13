import React, { useEffect, useContext } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import Preloader from '../layout/Preloader';

import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser, loading } = authContext;

  useEffect(() => {
    // Load user to see if user should be redirected to dashboard
    // Set to false to not log error of not being logged in
    loadUser(false);
    // eslint-disable-next-line
  }, []);

  if (isAuthenticated) {
    return (
      <Route>
        <Redirect to='/dashboard' />
      </Route>
    );
  }

  if (loading) {
    return <Preloader></Preloader>;
  }

  return (
    <div className='home__page'>
      <div className='row'>
        <div className='col sm12'>
          <h1>Welcome to Goal Tracker!</h1>
          <p>This is the public homepage</p>
          <p>
            If you are logged in you will be redirected to the private{' '}
            <Link to='/dashboard'>dashboard</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
