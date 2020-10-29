import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';

function AddBudgetModal() {
  const [show, setShow] = useState(false);
  const [budgetSpendPercent, setBudgetSpendPercent] = useState(65);
  const [budgetAmountValue, setBudgetAmountValue] = useState('');
  const [budgetNameValue, setBudgetNameValue] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleBudgetSpendPercentSlider(e: any) {
    setBudgetSpendPercent(e.target.value);
  }
  function handleBudgetAmountField(e: any) {
    setBudgetAmountValue(e.target.value);
  }
  function handleBudgetNameField(e: any) {
    setBudgetNameValue(e.target.value);
  }

  function handleAddBudgetClick(e: any) {
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
  }
  return (
    <>
      <Button variant='primary' className='btn mt-4 center' onClick={handleShow}>
        Add Budget
      </Button>

      <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Adding Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='budgetAmount'>
              <Form.Label>Budget Amount</Form.Label>
              <Form.Control
                onChange={(e) => handleBudgetAmountField(e)}
                type='text'
                placeholder='Budget Amount'
              />
            </Form.Group>

            <Form.Group controlId='budgetName'>
              <Form.Label>Budget Name</Form.Label>
              <Form.Control
                onChange={(e) => handleBudgetNameField(e)}
                type='text'
                placeholder='Budget Name'
              />
            </Form.Group>
            <Form.Group controlId='formBasicRange'>
              <Form.Label>Warn me when spending exceeds {budgetSpendPercent}%</Form.Label>
              <Form.Control
                onChange={(e) => handleBudgetSpendPercentSlider(e)}
                type='range'
                min={0}
                max={100}
                value={budgetSpendPercent}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' type='submit' onClick={handleAddBudgetClick}>
            Add Budget
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddBudgetModal;
