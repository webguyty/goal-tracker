import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import GoalsContext from '../../context/goals/goalsContext';

const AddGoal = () => {
  const authContext = useContext(AuthContext);
  const goalsContext = useContext(GoalsContext);

  const { user } = authContext;
  const { addGoal, getGoals } = goalsContext;

  const [goalsStr, setGoalsStr] = useState('');
  const [goalsArr, setGoalsArr] = useState([]);
  const [goal, setGoal] = useState({});

  const onSubmit = (e) => {
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
    // console.log(goalsArr);
  }, [goalsArr]);

  return (
    <div className='addGoal'>
      <h3>We are adding some goals</h3>
      <form action='addGoal__form' onSubmit={onSubmit}>
        <label htmlFor='w3review'>Add what you want in life</label>

        <textarea
          id='addGoal-goalInput'
          className='addGoal__goalInput'
          placeholder='This is some text'
          value={goalsStr}
          onChange={(e) => setGoalsStr(e.target.value)}
        />
        <div className='row center-align'>
          <button className='btn waves-effect waves-light' type='submit'>
            Submit
            <i className='material-icons right'>send</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGoal;
