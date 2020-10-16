import React, { useEffect, useContext } from 'react';
import Preloader from '../layout/Preloader';
import GoalsList from '../goals/GoalsList';
import AddGoal from '../goals/AddGoal';

import AuthContext from '../../context/auth/authContext';
import GoalsContext from '../../context/goals/goalsContext';

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const goalsContext = useContext(GoalsContext);

  const { loadUser, loading } = authContext;

  const { getGoals, goals } = goalsContext;

  useEffect(() => {
    loadUser();
    // getGoals();

    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Preloader></Preloader>;
  }

  return (
    <div className='dashboard__page'>
      <div className='row'>
        <div className='col s4 goalsList__BG'>
          <GoalsList />
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
