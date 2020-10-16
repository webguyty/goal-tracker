import React, { Fragment } from 'react';
import goalsContext from '../../context/goals/goalsContext';

const GoalsListItem = ({ goal }) => {
  // const formatted = goal.replace(/\r?\n/g, '<br />');

  // {goal.split('\n').map((item, key) => {
  //   return (
  //     <Fragment key={key}>
  //       {item}
  //       <br />
  //     </Fragment>
  //   );
  // })}

  return (
    <div className='collection-item'>
      {goal.split('\n').map((item, key) => {
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
