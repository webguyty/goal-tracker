import React, { useContext, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loginUser, logout } = authContext;
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser();

    history.push('/dashboard');
  };

  return (
    <div className='login__page'>
      <div className='row'>
        <form onSubmit={onSubmit} className='col s12 m8 offset-m2'>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                id='username'
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='validate'
              />
              <label htmlFor='username'>Username</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                id='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='validate'
              />
              <label htmlFor='password'>Password</label>
            </div>
          </div>
          <div className='row center-align'>
            <button className='btn waves-effect waves-light' type='submit'>
              Submit
              <i className='material-icons right'>send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
