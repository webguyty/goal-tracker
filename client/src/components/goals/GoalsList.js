import React, { useEffect, useContext } from 'react';
import GoalsListItem from './GoalsListItem';

import GoalsContext from '../../context/goals/goalsContext';

const GoalsList = () => {
  const goalsContext = useContext(GoalsContext);

  const { getGoals, goals } = goalsContext;

  useEffect(() => {
    getGoals();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='goalsList'>
      <h4 className='center-align'>Goals List</h4>
      {goals.length === 0 && (
        <p className='center-align blue-text'>Add your first goal!</p>
      )}
      <ul className='goalsList__ul'>
        {goals.map((goal) => (
          <GoalsListItem goal={goal} key={goal._id} />
        ))}
      </ul>
    </div>
  );
};

export default GoalsList;
