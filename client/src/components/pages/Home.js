import React, { useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  useEffect(() => {}, []);

  if (isAuthenticated) {
    return (
      <Route>
        <Redirect to='/dashboard' />
      </Route>
    );
  }

  return (
    <div className='home__page'>
      <div className='row'>
        <div className='col sm12'>
          <h1>Welcome to Goal Tracker!</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
