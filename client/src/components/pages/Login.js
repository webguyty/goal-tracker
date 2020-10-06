import React from 'react';

const Login = () => {
  return (
    <div className='login__page'>
      <div className='row'>
        <form action='' className='col s12 m8 offset-m2'>
          <div className='row'>
            <div className='input-field col s12'>
              <input id='username' type='text' className='validate' />
              <label htmlFor='username'>Username</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input id='password' type='password' className='validate' />
              <label htmlFor='password'>Password</label>
            </div>
          </div>
          <div className='row center-align'>
            <button
              className='btn waves-effect waves-light'
              type='submit'
              name='action'
            >
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
