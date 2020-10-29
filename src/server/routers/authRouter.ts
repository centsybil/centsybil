import express from 'express';
const authController = require('../controllers/authController');
const router = express.Router();
const path = require('path');

//landed in authRouter
router.get('/', (req, res) => {
  res
    .status(200)
    .sendFile(path.resolve(__dirname, '../../../public/index.html'));
});

router.post(
  '/signup',
  authController.addUser,
  authController.fetchCat,
  authController.fetchItems,
  (req, res) => {
    res.status(200).json({
      username: res.locals.username,
      budgetsArr: res.locals.categories,
      budgetItems: res.locals.items,
    });
  }
);

router.post(
  '/login',
  authController.verifyUser,
  authController.fetchCat,
  authController.fetchItems,
  (req, res) => {
    res
      .status(200).json({
        username: res.locals.username,
        budgetsArr: res.locals.categories,
        budgetItems: res.locals.items,
      });
      
  }
);

module.exports = router;


// .json({
//   username: res.locals.username,
//   budegtsArr: [
//     {
//     catName: res.locals.catName,
//     catAmount: res.locals.catAmount,
//     catId: res.locals.catId,
//     budegetArr: {
//       transName: res.locals.transName,
//       transAmount: res.locals.transAmount,
//     }
//   }]
//   });