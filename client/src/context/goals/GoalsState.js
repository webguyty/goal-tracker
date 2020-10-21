import React, { useReducer } from 'react';
import GoalsContext from './goalsContext';
import goalsReducer from './goalsReducer';
import configureHeaders from '../../utils/configureHeaders';
import {
  GET_GOALS,
  GOAL_ERROR,
  ADD_GOAL,
  UPDATE_GOAL,
  CLEAR_GOALS,
  SET_CURRENT,
  CLEAR_CURRENT,
  DELETE_GOAL,
  // CLEAR_FILTER,
  // FILTER_GOALS,
} from '../types';

const GoalsState = (props) => {
  const initialState = {
    goals: [],
    current: null,
    // filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(goalsReducer, initialState);

  // // Get Goals
  const getGoals = async () => {
    const headers = configureHeaders(localStorage.token);
    try {
      const res = await fetch('api/dailyGoals', {
        method: 'GET',
        headers: headers,
        // body: JSON.stringify(goal),
      });

      const data = await res.json();
      if (!res.ok) throw data.msg;
      dispatch({
        type: GET_GOALS,
        payload: data,
      });
    } catch (err) {
      console.error(err);
      console.log('fail');
      dispatch({ type: GOAL_ERROR, payload: err });
    }
  };

  // // Add Contact
  const addGoal = async (goal) => {
    const headers = configureHeaders(localStorage.token);

    try {
      const res = await fetch('api/dailyGoals', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(goal),
      });

      const data = await res.json();

      // If response is false, throw error with message from auth middleware
      if (!res.ok) throw data.msg;

      // const res = await axios.post('/api/contacts', contact, config);
      dispatch({
        type: ADD_GOAL,
        payload: data,
      });
    } catch (err) {
      dispatch({ type: GOAL_ERROR, payload: err });
    }
  };

  // Update Goal
  const updateGoal = async (goal, id) => {
    const headers = configureHeaders(localStorage.token);

    try {
      const res = await fetch(`api/dailyGoals/goal/${id}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(goal),
      });
      const data = await res.json();
      if (!res.ok) throw data.msg;
      dispatch({
        type: UPDATE_GOAL,
        payload: data,
      });
    } catch (err) {
      dispatch({ type: GOAL_ERROR, payload: err });
    }
  };

  // Delete Contact
  const deleteGoal = async (id) => {
    const headers = configureHeaders(localStorage.token);
    try {
      const res = await fetch(`api/dailyGoals/goal/${id}`, {
        method: 'DELETE',
        headers: headers,
      });

      const data = await res.json();
      if (!res.ok) throw data.msg;
      dispatch({
        type: DELETE_GOAL,
        payload: id,
      });
    } catch (err) {
      dispatch({ type: GOAL_ERROR, payload: err });
    }
  };

  // Clear Goals
  const clearGoals = () => {
    dispatch({ type: CLEAR_GOALS });
  };

  // // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };

  // // Clear Current Contact
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  // // Filter Contacts
  // const filterContacts = (text) => {
  //   dispatch({
  //     type: FILTER_CONTACTS,
  //     payload: text,
  //   });
  // };

  // // Clear Filter
  // const clearFilter = () => {
  //   dispatch({
  //     type: CLEAR_FILTER,
  //   });
  // };

  return (
    <GoalsContext.Provider
      value={{
        goals: state.goals,
        current: state.current,
        //       filtered: state.filtered,
        error: state.error,
        addGoal,
        updateGoal,
        deleteGoal,
        setCurrent,
        clearCurrent,
        //       filterGoals,
        //       clearFilter,
        getGoals,
        clearGoals,
      }}
    >
      {props.children}
    </GoalsContext.Provider>
  );
};

export default GoalsState;
