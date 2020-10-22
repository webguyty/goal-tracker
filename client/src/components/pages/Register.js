import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ErrorMsg from '../../components/auth/ErrorMsg';
import M from 'materialize-css/dist/js/materialize.min.js';
import AuthContext from '../../context/auth/authContext';

const Register = () => {
  const authContext = useContext(AuthContext);
  const { register, isAuthenticated, error, addErrors } = authContext;
  const [user, setUser] = useState({
    username: '',
    password: '',
    password2: '',
  });

  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      M.toast({ html: `Thank you for registering ${user.username}!` });
      history.push('/dashboard');
    }
  }, [isAuthenticated, history, user.username]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.password2) {
      addErrors('Passwords do not match');
    } else {
      // const registerStatus = register({
      //   username: user.username,
      //   password: user.password,
      // });
      register({
        username: user.username,
        password: user.password,
      });

      // if (registerStatus)
      //   M.toast({ html: 'Thank you for creating an account!' });
    }
  };

  return (
    <div className='register__page'>
      <div className='row'>
        <div className='col s12'>
          {/* Show errors if there are any */}
          {error && <ErrorMsg msg={error} />}
          <h2 className='center-align'>Register</h2>
          <div className='row'>
            <form onSubmit={onSubmit} className='col s12 m4 offset-m4'>
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
                  <label htmlFor='password2'>Retype Password</label>
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
                Already have an account? <Link to='/login'>Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
