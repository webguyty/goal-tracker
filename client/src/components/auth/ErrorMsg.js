import React from 'react';

const ErrorMsg = ({ msg }) => {
  return (
    <div className='row'>
      <div className='col s12'>
        <p className='red-text center-align'>
          <strong>{msg}</strong>
        </p>
      </div>
    </div>
  );
};

export default ErrorMsg;
