import express from 'express';
const authController = require('../controllers/authController');
const router = express.Router();
const path = require('path');

//landed in authRouter
router.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../../../public/index.html'));
})

router.post('/signup',
 /* authController.signup,
  authController.verify,*/
  authController.fetchData,
  (req, res) => {
    res.status(200).json({ verified: res.locals.status});
})

// router.post('/login',
//   authController.verify,
//   authController.fetchData,
//   (req, res) => {
//     res.status(200).json({ verified: res.locals.status});
//  })

module.exports = router;
