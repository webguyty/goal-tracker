import React, { Fragment, useContext } from 'react';
import Moment from 'react-moment';
import GoalsContext from '../../context/goals/goalsContext';

const GoalsListItem = ({ goal }) => {
  const goalsContext = useContext(GoalsContext);
  const { setCurrent } = goalsContext;

  const { goalsStr, date } = goal;

  const onClick = (g) => {
    setCurrent(g);
  };

  // Split string at new line
  return (
    <div className='goalsList__item' onClick={() => setCurrent(goal)}>
      <p className='goalsList__item__date'>
        <Moment format='MMM DD YYYY, h:mm a'>{date}</Moment>
      </p>
      {goalsStr.split('\n').map((item, key) => {
        return (
          <Fragment key={key}>
            {item}
            <br />
          </Fragment>
        );
      })}
    </div>
  );
};

export default GoalsListItem;
