import React, { Fragment, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, { edge: 'right' });
    // es-lint disable-next-line
  }, []);

  return (
    <Fragment>
      <nav>
        <div class='nav-wrapper'>
          <a href='#!' class='brand-logo'>
            Goal Tracker
          </a>
          <a href='#' data-target='mobile-demo' class='sidenav-trigger right'>
            <i class='material-icons'>menu</i>
          </a>
          <ul class='right hide-on-med-and-down'>
            <li>
              <a href='sass.html'>Login</a>
            </li>
            <li>
              <a href='badges.html'>Register</a>
            </li>
            <li>
              <a href='collapsible.html'>How it works</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul class='sidenav no-autoinit' id='mobile-demo'>
        <li>
          <a href='sass.html'>Sass</a>
        </li>
        <li>
          <a href='badges.html'>Components</a>
        </li>
        <li>
          <a href='collapsible.html'>Javascript</a>
        </li>
        <li>
          <a href='mobile.html'>Mobile</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;
