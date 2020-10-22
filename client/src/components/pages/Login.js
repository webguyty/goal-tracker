import React, { useContext, useState, useEffect } from 'react';
import ErrorMsg from '../auth/ErrorMsg';
import AuthContext from '../../context/auth/authContext';
import { useHistory, Link } from 'react-router-dom';

const Login = () => {
  const authContext = useContext(AuthContext);
  const { loginUser, isAuthenticated, error } = authContext;
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // When logged in redirect to dashboard
    if (isAuthenticated) {
      history.push('/dashboard');
    }
  }, [isAuthenticated, history]);

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser({ username, password });
  };

  return (
    <div className='login__page'>
      <div className='row'>
        <div className='col s12'>
          {/* Show errors if there are any */}
          {error && <ErrorMsg msg={error} />}
          <h2 className='center-align'>Login</h2>
          {/* Login Form */}
          <div className='row'>
            <form onSubmit={onSubmit} className='col s12 m4 offset-m4'>
              <div className='row'>
                <div className='input-field col s12'>
                  <input
                    id='username'
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='validate'
                    required
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
                    required
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

          <div className='row'>
            <div className='col s12 m8 offset-m2 center-align'>
              <p>
                Need to create an account? <Link to='/register'>Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
