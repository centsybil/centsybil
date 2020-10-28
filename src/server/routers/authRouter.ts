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
  //authController.fetchData,
  (req, res) => {
    res.status(200).json('testinggg');
  }
);

router.post(
  '/login',
  authController.verifyUser,
  //authController.fetchData,
  (req, res) => {
    res
      .status(200)
      .send('it workssssssss');
  }
);

module.exports = router;
