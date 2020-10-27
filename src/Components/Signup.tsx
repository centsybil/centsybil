import React from 'react';

type SignupProps = { message: string; author: string };
function Signup({ message, author }: SignupProps) {
  return (
    <>
      <h2>{message}</h2>
      <h5>{author}</h5>
    </>
  );
}

export default Signup;
