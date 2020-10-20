import React, { useState, useEffect, useContext } from 'react';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';

import AuthContext from '../../context/auth/authContext';
import GoalsContext from '../../context/goals/goalsContext';

const SetGoal = () => {
  const authContext = useContext(AuthContext);
  const goalsContext = useContext(GoalsContext);

  const { user } = authContext;
  const {
    addGoal,
    current,
    deleteGoal,
    updateGoal,
    clearCurrent,
  } = goalsContext;

  const [goalsStr, setGoalsStr] = useState('');
  const [date, setDate] = useState(new Date());

  // Read any current goals selected
  // Pull in current daily goal. If daily goal is null save as new daily goal
  useEffect(() => {
    if (current) {
      setDate(current.date);
      setGoalsStr(current.goalsStr);
    }
  }, [current]);

  // Create new goal
  const onSave = (e) => {
    e.preventDefault();
    // Split string into array at new line
    // Filter out any blank line / string
    // Trim off any white space
    const goalsSplit = goalsStr
      .split(/\r?\n/)
      .filter((g) => g.match(/[a-z]|[A-Z]|[0-9]/g))
      .map((g) => g.trim());

    const goal = {
      userID: user._id,
      goalsStr,
      goalsArr: goalsSplit,
    };
    addGoal(goal);
  };

  const onUpdate = (e, currentID) => {
    e.preventDefault();
    const goalsSplit = goalsStr
      .split(/\r?\n/)
      .filter((g) => g.match(/[a-z]|[A-Z]|[0-9]/g))
      .map((g) => g.trim());

    const goal = {
      userID: user._id,
      goalsStr,
      goalsArr: goalsSplit,
    };
    // console.log(goal);
    updateGoal(goal, currentID);
  };

  // Button for new daily goal
  const newDailyGoal = () => {
    clearCurrent();
    setGoalsStr('');
    setDate(new Date());
  };

  // Remove Goal
  const onDelete = (id) => {
    deleteGoal(id);
    M.toast({ html: `Goal Deleted` });
  };

  return (
    <div className='setGoal'>
      <h3>We are adding some goals</h3>
      <p className='setGoal__date'>
        <Moment format='MMM DD YYYY, h:mm a'>{date}</Moment>
      </p>
      <form className='setGoal__form'>
        <div className='setGoal__labelContainer'>
          <label htmlFor='setGoal-goalInput'>Add what you want in life</label>
          {current && (
            <span className='right'>
              <button
                onClick={() => onDelete(current._id)}
                className='setGoal__deleteButton waves-effect waves-light btn-small red'
              >
                <i className='medium material-icons'>delete_forever</i>
              </button>
            </span>
          )}
        </div>

        <textarea
          id='setGoal-goalInput'
          className='setGoal__goalInput'
          placeholder='This is some text'
          value={goalsStr}
          onChange={(e) => setGoalsStr(e.target.value)}
        />
        <div className='row center-align'>
          <button
            className='btn waves-effect waves-light'
            type='submit'
            // Save if new goal, update if current is set
            onClick={!current ? onSave : (e) => onUpdate(e, current._id)}
          >
            {!current ? 'Save' : 'Update'}
            <i className='material-icons right'>send</i>
          </button>
        </div>
      </form>
      <button
        className='btn-floating btn-large waves-effect waves-light red right'
        onClick={() => newDailyGoal()}
      >
        <i className='material-icons'>add</i>
      </button>
    </div>
  );
};

export default SetGoal;
