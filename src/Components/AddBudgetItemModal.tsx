import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { FiPlus } from 'react-icons/fi';
import { Context } from '../ContextProvider';

function AddBudgetItemModal(props) {
  const [show, setShow] = useState(false);
  const [itemAmountValue, setItemAmountValue] = useState(0);
  const [itemNameValue, setItemNameValue] = useState('');
  const { createBudgetItem } = useContext(Context);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // function handleBudgetSpendPercentSlider(e: any) {
  //   setBudgetSpendPercent(e.target.value);
  // }
  function handleItemAmountField(e: any) {
    setItemAmountValue(parseInt(e.target.value));
  }
  function handleItemNameField(e: any) {
    setItemNameValue(e.target.value);
  }

  function handleAddBudgetItemClick(e: any) {
    createBudgetItem(itemAmountValue, itemNameValue, props.budgetName);
    //pass in the state below
    // createBudget(budgetNameValue, budgetAmountValue, budgetSpendPercent);
    // axios
    //   .post('/home/cat', {
    //     userId: 1,
    //     budgetMax: budgetAmountValue,
    //     budgetName: budgetNameValue,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    handleClose();
  }
  return (
    <>
      <Button title='Add Budget Item' variant='primary' onClick={handleShow}>
        Add Budget Item
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Budget Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='itemAmount'>
              <Form.Label>Item Price</Form.Label>
              <Form.Control
                onChange={(e) => handleItemAmountField(e)}
                type='number'
                placeholder='Item Amount'
              />
            </Form.Group>

            <Form.Group controlId='itemName'>
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                onChange={(e) => handleItemNameField(e)}
                type='text'
                placeholder='Item Name'
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
            onClick={handleAddBudgetItemClick}
          >
            Add Item
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddBudgetItemModal;
