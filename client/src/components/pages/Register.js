import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import AuthContext from '../../context/auth/authContext';

const Register = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loginUser } = authContext;
  const [user, setUser] = useState({
    username: '',
    password: '',
    password2: '',
  });

  const history = useHistory();

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser();
    M.toast({ html: 'Thanks you for creating an account!' });
    history.push('/dashboard');
  };

  return (
    <div className='register__page'>
      <div className='row'>
        <div className='col s12'>
          <h1 className='center-align'>Create an account</h1>
          <form onSubmit={onSubmit} className='col s12 m8 offset-m2'>
            <div className='row'>
              <div className='input-field col s12'>
                <input
                  id='username'
                  name='username'
                  type='text'
                  value={user.username}
                  onChange={onChange}
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
                  name='password'
                  type='password'
                  value={user.password}
                  onChange={onChange}
                  className='validate'
                  required
                />
                <label htmlFor='password'>Password</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <input
                  id='password2'
                  name='password2'
                  type='password'
                  value={user.password2}
                  onChange={onChange}
                  className='validate'
                  required
                />
                <label htmlFor='password'>Retype Password</label>
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
    </div>
  );
};

export default Register;