import React, { useReducer } from 'react';
import GoalsContext from './goalsContext';
import goalsReducer from './goalsReducer';
import configureHeaders from '../../utils/configureHeaders';
import {
  GET_CONTACTS,
  CONTACT_ERROR,
  ADD_CONTACT,
  UPDATE_CONTACT,
  CLEAR_CONTACTS,
  SET_CURRENT,
  DELETE_CONTACT,
  CLEAR_FILTER,
  FILTER_CONTACTS,
} from '../types';

const GoalsState = (props) => {
  const initialState = {
    goals: null,
    // current: null,
    // filtered: null,
    // error: null,
  };

  const [state, dispatch] = useReducer(goalsReducer, initialState);

  // // Get Contacts
  // const getContacts = async () => {
  //   try {
  //     const res = await axios.get('/api/contacts');
  //     dispatch({
  //       type: GET_CONTACTS,
  //       payload: res.data,
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: CONTACT_ERROR,
  //       payload: error.response.msg,
  //     });
  //   }
  // };

  // // Add Contact
  const addContact = async (contact) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/contacts', contact, config);
      dispatch({
        type: ADD_GOAL,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: GOAL_ERROR, payload: error.response.msg });
    }
  };

  // // Update Contact
  // const updateContact = async (contact) => {
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };

  //   try {
  //     const res = await axios.put(
  //       `/api/contacts/${contact._id}`,
  //       contact,
  //       config
  //     );
  //     dispatch({
  //       type: UPDATE_CONTACT,
  //       payload: res.data,
  //     });
  //   } catch (error) {
  //     dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
  //   }
  // };

  // // Delete Contact
  // const deleteContact = async (id) => {
  //   try {
  //     await axios.delete(`/api/contacts/${id}`);
  //     dispatch({
  //       type: DELETE_CONTACT,
  //       payload: id,
  //     });
  //   } catch (error) {
  //     dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
  //   }
  // };

  // // Clear Contacts
  // const clearContacts = () => {
  //   dispatch({ type: CLEAR_CONTACTS });
  // };

  // // Set Current Contact
  // const setCurrent = (contact) => {
  //   dispatch({
  //     type: SET_CURRENT,
  //     payload: contact,
  //   });
  // };

  // // Clear Current Contact
  // const clearCurrent = () => {
  //   dispatch({
  //     type: CLEAR_CURRENT,
  //   });
  // };

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

  // return (
  <GoalsContext.Provider
    value={{
      goals: state.goals,
      //       current: state.current,
      //       filtered: state.filtered,
      //       error: state.error,
      addGoal,
      //       updateGoal,
      //       deleteGoal,
      //       setCurrent,
      //       clearCurrent,
      //       filterGoals,
      //       clearFilter,
      //       getGoals,
      //       clearGoals,
    }}
  >
    {props.children}
  </GoalsContext.Provider>;
  // );
};

export default GoalsState;
