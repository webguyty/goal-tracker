import React, { useEffect, useContext } from 'react';
import Preloader from '../layout/Preloader';
import AuthContext from '../../context/auth/authContext';

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser, loading } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Preloader></Preloader>;
  }

  return (
    <div className='dashboard__page'>
      <h1>Welcome to your dashboard</h1>
      <h2>Log your dreams today</h2>
    </div>
  );
};

export default Dashboard;
