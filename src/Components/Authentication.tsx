import React from 'react';
import Button from 'react-bootstrap/Button';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

function Authentication() {
  return (
    <div className='continer-fluid my-4 mx-4 w-100'>
      <LoginModal></LoginModal>
      <SignupModal></SignupModal>
    </div>
  );
}

export default Authentication;
