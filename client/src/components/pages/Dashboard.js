import React, { useEffect, useContext } from 'react';
import Preloader from '../layout/Preloader';
import GoalsList from '../goals/GoalsList';
import SetGoal from '../goals/SetGoal';

import AuthContext from '../../context/auth/authContext';
import GoalsContext from '../../context/goals/goalsContext';

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const goalsContext = useContext(GoalsContext);

  const { loadUser, loading } = authContext;

  // const { getGoals, goals } = goalsContext;

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
        <div className='col s12 m3 goalsList__BG'>
          <GoalsList />
        </div>
        {/* <div className='col s12 m9'> */}

        <div className='col s12 m9'>
          <SetGoal />
        </div>

        {/* </div> */}
      </div>
      {/* Main row */}
    </div>
  );
};

export default Dashboard;
