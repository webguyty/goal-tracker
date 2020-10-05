import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  // REGISTER_SUCCESS,
  // REGISTER_FAIL,
  // USER_LOADED,
  // AUTH_ERROR,
  LOGIN_SUCCESS,
  // LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    // token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  // const loadUser = async () => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }

  //   try {
  //     const res = await axios.get('./api/auth');
  //     console.log(res.data);
  //     dispatch({
  //       type: USER_LOADED,
  //       payload: res.data,
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: AUTH_ERROR,
  //     });
  //   }
  // };

  // Register User
  // const register = async (formData) => {
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };

  //   try {
  //     const res = await axios.post('api/users', formData, config);

  //     dispatch({
  //       type: REGISTER_SUCCESS,
  //       payload: res.data,
  //     });

  //     loadUser();
  //   } catch (err) {
  //     dispatch({
  //       type: REGISTER_FAIL,
  //       payload: err.response.data.msg,
  //     });
  //   }
  // };

  // Login User
  const loginUser = () => {
    dispatch({
      type: LOGIN_SUCCESS,
    });
  };
  // const loginUser = async (formData) => {
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };

  //   try {
  //     const res = await axios.post('api/auth', formData, config);

  //     dispatch({
  //       type: LOGIN_SUCCESS,
  //       payload: res.data,
  //     });

  //     loadUser();
  //   } catch (err) {
  //     dispatch({
  //       type: LOGIN_FAIL,
  //       payload: err.response.data.msg,
  //     });
  //   }
  // };

  // Logout
  const logout = (params) => {
    dispatch({
      type: LOGOUT,
    });
  };

  // // Clear Errors
  // const clearErrors = (params) => {
  //   dispatch({
  //     type: CLEAR_ERRORS,
  //   });
  // };

  return (
    <AuthContext.Provider
      value={{
        // token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        // register,
        // loadUser,
        loginUser,
        logout,
        // clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
