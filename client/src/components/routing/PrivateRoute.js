import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Preloader from '../layout/Preloader';

import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading, loadUser } = authContext;

  // Log in user
  useEffect(() => {
    if (loading) loadUser();
    // eslint-disable-next-line
  }, []);

  // Return preloader while loading
  if (loading) return <Preloader />;

  // Return private component if logged in, redirect to login screen if not
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
