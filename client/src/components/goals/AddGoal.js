import React, { useState, useEffect } from 'react';

const AddGoal = () => {
  const [goals, setGoals] = useState('');
  const [goalsArr, setGoalsArr] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const goalsSplit = goals.split(/\r?\n/);

    // Clear array and add to it
    setGoalsArr([...goalsSplit]);

    // Current array state and adding to it
    // setGoalsArr([...goalsArr, ...goalsSplit]);
    // or
    // setGoalsArr((current) => [...current, ...goalsSplit]);
  };
  useEffect(() => {
    console.log(goalsArr);
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
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
        />
        <div className='row center-align'>
          <button className='btn waves-effect waves-light' type='submit'>
            Submit
            <i className='material-icons right'>send</i>
          </button>
        </div>
      </form>
      {/* <p onClick={() => setGoalsArr([])}>clear</p> */}
    </div>
  );
};

export default AddGoal;
