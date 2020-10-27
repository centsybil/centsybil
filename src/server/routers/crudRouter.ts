import express from 'express';
const catController = require('../controllers/catController');
const transController = require('../controllers/transController');
const router = express.Router();
const path = require('path');

//Login is successful

//Category Routes
router.post('/cat', catController.addCat, (req, res) => {
  res.status(200).json({ verified: res.locals.status });
});

router.put('/cat', catController.updateCat, (req, res) => {
  res.status(200).json({ verified: res.locals.status });
});

router.delete('/cat', catController.deleteCat, (req, res) => {
  res.status(200).json({ verified: res.locals.status });
});

//Transactions Routes
router.post('/trans', transController.addTrans, (req, res) => {
  res.status(200).json({ verified: res.locals.status });
});

router.put('/trans', transController.updateTrans, (req, res) => {
  res.status(200).json({ verified: res.locals.status });
});

router.delete('/trans', transController.deleteTrans, (req, res) => {
  res.status(200).json({ verified: res.locals.status });
});

module.exports = router;
