import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { Context } from '../ContextProvider';

function SignupModal() {
  const [show, setShow] = useState(false);
  const [usernameField, setUsernameField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const { createBudget } = useContext(Context);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleUsernameField(e: any) {
    setUsernameField(e.target.value);
  }
  function handlePasswordField(e: any) {
    setPasswordField(e.target.value);
  }

  function handleAddBudgetClick(e: any) {
    //pass in the state below
    axios
      .post('/home/cat', {
        userId: 1,
        budgetMax: budgetAmountValue,
        budgetName: budgetNameValue,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    handleClose();
  }
  return (
    <>
      <Button variant='primary' block onClick={handleShow}>
        Signup
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='login'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={(e) => handleUsernameField(e)}
                type='text'
                placeholder='Username'
              />
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => handlePasswordField(e)}
                type='password'
                placeholder='Password'
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            variant='primary'
            type='submit'
            onClick={handleAddBudgetClick}
          >
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignupModal;
