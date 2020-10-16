import React, { Fragment } from 'react';
import Moment from 'react-moment';
import goalsContext from '../../context/goals/goalsContext';

const GoalsListItem = ({ goal }) => {
  const { goalsStr, date } = goal;
  // Regex version which doesn't work in react
  // const formatted = goal.replace(/\r?\n/g, '<br />');

  // Split string at new line
  return (
    <div className='goalsList__item'>
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
