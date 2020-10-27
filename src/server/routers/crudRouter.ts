import express from 'express';
const crudController = require('../controllers/crudController');
const router = express.Router();
const path = require('path');

//Login is successful

//Update/edit Total Budget
router.put('/', crudController.updateTotal, (req, res) => {
  res.status(200).json({ verified: res.locals.status });
});

//Category Routes
router.post('/cat', crudController.addCat, (req, res) => {
  res.status(200).json({ verified: res.locals.status });
});

router.put('/cat', crudController.updateCat, (req, res) => {
  res.status(200).json({ verified: res.locals.status });
});

router.delete('/cat', crudController.deleteCat, (req, res) => {
  res.status(200).json({ verified: res.locals.status });
});

//Transactions Routes
router.post('/trans', crudController.addTrans, (req, res) => {
  res.status(200).json({ verified: res.locals.status });
});

router.put('/trans', crudController.updateTrans, (req, res) => {
  res.status(200).json({ verified: res.locals.status });
});

router.delete('/trans', crudController.deleteTrans, (req, res) => {
  res.status(200).json({ verified: res.locals.status });
});

module.exports = router;
