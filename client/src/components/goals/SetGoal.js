import React, { useState, useEffect, useContext } from 'react';
import Moment from 'react-moment';
import AuthContext from '../../context/auth/authContext';
import GoalsContext from '../../context/goals/goalsContext';

const SetGoal = () => {
  const authContext = useContext(AuthContext);
  const goalsContext = useContext(GoalsContext);

  const { user } = authContext;
  const { addGoal, current } = goalsContext;

  const [goalsStr, setGoalsStr] = useState('');
  const [goalsArr, setGoalsArr] = useState([]);
  const [date, setDate] = useState(new Date());

  const onSave = (e) => {
    e.preventDefault();
    // Split string into array at new line
    // Filter out any blank line / string
    // Trim off any white space
    const goalsSplit = goalsStr
      .split(/\r?\n/)
      .filter((g) => g.match(/[a-z]|[A-Z]|[0-9]/g))
      .map((g) => g.trim());

    setGoalsArr([...goalsSplit]);

    const goal = {
      userID: user._id,
      goalsStr,
      goalsArr: goalsSplit,
    };
    addGoal(goal);
  };

  useEffect(() => {
    if (current) {
      setDate(current.date);
      setGoalsStr(current.goalsStr);
      console.log('fired');
    }
  }, [current]);

  return (
    <div className='setGoal'>
      <h3>We are adding some goals</h3>
      <p className='setGoal__date'>
        <Moment format='MMM DD YYYY, h:mm a'>{date}</Moment>
      </p>
      <form action='setGoal__form' onSubmit={onSave}>
        <label htmlFor='w3review'>Add what you want in life</label>

        <textarea
          id='setGoal-goalInput'
          className='setGoal__goalInput'
          placeholder='This is some text'
          value={goalsStr}
          onChange={(e) => setGoalsStr(e.target.value)}
        />
        <div className='row center-align'>
          <button className='btn waves-effect waves-light' type='submit'>
            Save
            <i className='material-icons right'>send</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetGoal;
