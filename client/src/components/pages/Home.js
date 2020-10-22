import React, { useEffect, useContext } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import Preloader from '../layout/Preloader';

import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser, loading } = authContext;

  useEffect(() => {
    // Load user to see if user should be redirected to dashboard
    // Set to false to not log error of not being logged in
    loadUser(false);
    // eslint-disable-next-line
  }, []);

  if (isAuthenticated) {
    return (
      <Route>
        <Redirect to='/dashboard' />
      </Route>
    );
  }

  if (loading) {
    return <Preloader></Preloader>;
  }

  return (
    <div className='home__page'>
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <h1>Welcome to Goal Tracker!</h1>
            <h4>A tool for motivation and goal acquisition</h4>
            <h5>Directions:</h5>
          </div>
        </div>

        {/* Cards */}
        <div class='row'>
          <div class='col s12 m4'>
            <div class='card blue'>
              <div class='card-content white-text'>
                <span class='card-title'>Write down your goals</span>
                <p>
                  Write down any goals that cross your mind. Make sure to write
                  them in present tense as if you have already achieved them.
                </p>
              </div>
            </div>
          </div>
          <div class='col s12 m4'>
            <div class='card blue'>
              <div class='card-content white-text'>
                <span class='card-title'>Repeat everyday</span>
                <p>
                  Invest 5 minutes everyday to achieve the goals of your dreams.
                  Be as specific as you like and let your imagination run wild.
                </p>
              </div>
            </div>
          </div>
          <div class='col s12 m4'>
            <div class='card blue'>
              <div class='card-content white-text'>
                <span class='card-title'>Examples</span>
                <p>
                  I have $4 million in investments <br />
                  I have a great relationship with my family <br />I bike 100
                  miles for fun
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End cards */}
        <div className='row'>
          <div className='col s12'>
            <p className='home__page__bigText blue-text text-lighten-2'>
              Program your subconscious for success
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
