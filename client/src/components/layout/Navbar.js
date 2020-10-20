import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import M from 'materialize-css/dist/js/materialize.min.js';
import AuthContext from '../../context/auth/authContext';
import GoalsContext from '../../context/goals/goalsContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const goalsContext = useContext(GoalsContext);

  const { isAuthenticated, logout } = authContext;
  const { clearGoals } = goalsContext;

  useEffect(() => {
    // Initialize Sidebar
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, { edge: 'right' });
    // es-lint disable-next-line
  }, []);

  const linksGuest = (
    <Fragment>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <a href='/about'>About</a>
      </li>
    </Fragment>
  );

  const linksUser = (
    <Fragment>
      <li>
        <Link
          to='/'
          onClick={() => {
            clearGoals();
            logout();
          }}
        >
          Logout
        </Link>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo'>
            Goal Tracker
          </Link>
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
