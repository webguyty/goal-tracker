import React, { useEffect, useContext } from 'react';

import GoalsListItem from './GoalsListItem';
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

  useEffect(() => {
    // console.log(goals);
    // eslint-disable-next-line
  }, [goals]);

  return (
    <div className='goalsList'>
      <h4 className='center-align'>Goals List</h4>
      <ul className='goalsList__ul'>
        {goals.map((goal) => (
          <GoalsListItem goal={goal} key={goal._id} />
        ))}
      </ul>
    </div>
  );
};

export default GoalsList;