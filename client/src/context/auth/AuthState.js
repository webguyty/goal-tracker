import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import configureHeaders from '../../utils/configureHeaders';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  // Set logError to false if you do not want error message on failed loadUser call (for home page component)
  const loadUser = async (logError = true) => {
    const headers = configureHeaders(localStorage.token);

    try {
      const res = await fetch('./api/auth', {
        method: 'GET',
        headers: headers,
      });

      const data = await res.json();

      // If response is false, throw error with message from auth middleware
      if (!res.ok) throw data.msg;
      dispatch({
        type: USER_LOADED,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: logError ? err : '',
      });
    }
  };

  // Register User
  const register = async (formData) => {
    const headers = configureHeaders(localStorage.token);

    // Form data is username and password
    try {
      const res = await fetch('api/users', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // If response is false, throw error with message from auth middleware
      if (!res.ok) throw data.msg;

      dispatch({
        type: REGISTER_SUCCESS,
        payload: data,
      });
      console.log('success');
      loadUser();
      // return true;
    } catch (err) {
      console.error(err);
      dispatch({
        type: REGISTER_FAIL,
        payload: err,
      });
    }
  };

  const loginUser = async (formData) => {
    const headers = configureHeaders(localStorage.token);

    try {
      const res = await fetch('api/auth', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // If response is false, throw error with message from auth middleware
      if (!res.ok) throw data.msg;

      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err,
      });
    }
  };

  // Logout
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  // Clear Errors
  const addErrors = (msg) => {
    dispatch({
      type: AUTH_ERROR,
      payload: msg,
    });
  };

  // Clear Errors
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        loginUser,
        logout,
        addErrors,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
