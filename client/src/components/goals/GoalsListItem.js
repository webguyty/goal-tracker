import React, { Fragment, useContext, useState } from 'react';
import Moment from 'react-moment';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import GoalsContext from '../../context/goals/goalsContext';

const GoalsListItem = ({ goal }) => {
  const goalsContext = useContext(GoalsContext);
  const { setCurrent } = goalsContext;

  const { goalsStr, date } = goal;

  const [showHover, setShowHover] = useState(false);

  return (
    <div
      className='goalsList__item'
      onClick={() => setCurrent(goal)}
      onMouseEnter={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}
    >
      {showHover && (
        <p className='goalsList__item__hoverText'>
          <i className='material-icons blue-text'>edit</i>
        </p>
      )}
      <p className='goalsList__item__date '>
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
