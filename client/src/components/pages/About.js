import React from 'react';

const About = () => {
  return (
    <div className='about__page'>
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <h2 className='center-align'>About</h2>
            <h5>
              Check it out on GitHub{' '}
              <a
                target='_blank'
                href='https://github.com/webguyty/goal-tracker'
              >
                github.com/webguyty/goal-tracker
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
