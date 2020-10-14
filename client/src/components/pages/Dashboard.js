import React, { useEffect, useContext } from 'react';
import Preloader from '../layout/Preloader';
import AddGoal from '../goals/AddGoal';

import AuthContext from '../../context/auth/authContext';

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const { loadUser, loading } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Preloader></Preloader>;
  }

  return (
    <div className='dashboard__page'>
      <div className='row'>
        <div className='col s4'>
          <p>Goals List</p>
        </div>
        <div className='col s8'>
          <div className='row'>
            <div className='col s12 m10'>
              <AddGoal />
            </div>
          </div>
        </div>
      </div>
      {/* Main row */}
    </div>
  );
};

export default Dashboard;
