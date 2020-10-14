import React, { useState, useEffect } from 'react';

const AddGoal = () => {
  const [goals, setGoals] = useState('');
  const [goalsArr, setGoalsArr] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const goalsSplit = goals.split(/\r?\n/);

    // setGoalsArr(goalsSplit.forEach((g) => goalsArr.push(g)));
    // console.log(goals);

    // setCount(currentCount => currentCount - 1)
    // setGoalsArr((currentArr) => [...currentArr, ...goalsSplit]);
    setGoalsArr((current) => [...current, ...goalsSplit]);
    // setGoalsArr(['asdf', 'fdas']);

    // const shit = 'shit';

    // setGoalsArr(goalsArr.push(shit));
    // console.log(goalsArr);
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
    </div>
  );
};

export default AddGoal;
