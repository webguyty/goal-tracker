import React from 'react';

const ErrorMsg = ({ msg }) => {
  return (
    <div className='row'>
      <div className='col s12'>
        <h4 className='red-text center-align'>
          <strong>{msg}</strong>
        </h4>
      </div>
    </div>
  );
};

export default ErrorMsg;
