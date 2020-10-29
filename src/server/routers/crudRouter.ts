import express from 'express';
const catController = require('../controllers/catController');
const transController = require('../controllers/transController');
const router = express.Router();
const authCotroller = require('../controllers/authController');



//Category Routes
router.post('/cat', catController.addCat, authCotroller.fetchCat, authCotroller.fetchItems, (req, res) => {
  res.status(200).json({
    username: res.locals.username,
    budgetsArr: res.locals.categories,
    budgetItems: res.locals.items,
  });
});

router.put('/cat', catController.updateCat,authCotroller.fetchCat, authCotroller.fetchItems, (req, res) => {
  res.status(200).json({
    username: res.locals.username,
    budgetsArr: res.locals.categories,
    budgetItems: res.locals.items,
  });
});

router.delete('/cat', catController.deleteCat, authCotroller.fetchCat, authCotroller.fetchItems, (req, res) => {
  res.status(200).json({
    username: res.locals.username,
    budgetsArr: res.locals.categories,
    budgetItems: res.locals.items,
  });
});

// //Transactions Routes
router.post('/trans', transController.addTrans, authCotroller.fetchCat, authCotroller.fetchItems, (req, res) => {
  res.status(200).json({
    username: res.locals.username,
    budgetsArr: res.locals.categories,
    budgetItems: res.locals.items,
  });
});

router.put('/trans', transController.updateTrans, authCotroller.fetchCat, authCotroller.fetchItems, (req, res) => {
  res.status(200).json({
    username: res.locals.username,
    budgetsArr: res.locals.categories,
    budgetItems: res.locals.items,
  });
});

router.delete('/trans', transController.deleteTrans, authCotroller.fetchCat, authCotroller.fetchItems, (req, res) => {
  res.status(200).json({
    username: res.locals.username,
    budgetsArr: res.locals.categories,
    budgetItems: res.locals.items,
  });
});

module.exports = router;
