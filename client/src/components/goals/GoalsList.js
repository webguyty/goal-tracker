import React, { useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import GoalsContext from '../../context/goals/goalsContext';

const GoalsList = () => {
  const authContext = useContext(AuthContext);
  const goalsContext = useContext(GoalsContext);

  const { getGoals, goals } = goalsContext;

  useEffect(() => {
    getGoals();
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   console.log(goals);

  //   // eslint-disable-next-line
  // }, [goals]);

  return (
    <div className='goalsList'>
      <p>Goals List</p>
    </div>
  );
};

export default GoalsList;
