import React, { Fragment, useEffect, useContext } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, loginUser, logout } = authContext;

  useEffect(() => {
    // Initialize Sidebar
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, { edge: 'right' });
    // es-lint disable-next-line
  }, []);

  const linksGuest = (
    <Fragment>
      <li>
        <a href='/#' onClick={() => loginUser()}>
          Login
        </a>
      </li>
      <li>
        <a href='/#'>Register</a>
      </li>
      <li>
        <a href='/#'>How to use</a>
      </li>
    </Fragment>
  );

  const linksUser = (
    <Fragment>
      <li>
        <a href='/#' onClick={() => logout()}>
          Logout
        </a>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <nav>
        <div className='nav-wrapper'>
          <a href='/#' className='brand-logo'>
            Goal Tracker
          </a>
          <a
            href='/#'
            data-target='mobile-demo'
            className='sidenav-trigger right'
          >
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            {isAuthenticated ? linksUser : linksGuest}
          </ul>
        </div>
      </nav>

      <ul className='sidenav no-autoinit' id='mobile-demo'>
        {isAuthenticated ? linksUser : linksGuest}
      </ul>
    </Fragment>
  );
};

export default Navbar;
