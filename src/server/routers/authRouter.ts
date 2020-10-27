import express from 'express';
const authController = require('../controllers/authController');
const router = express.Router();
const path = require('path');


//landed in authRouter
router.get('/', (req: any, res: any) => {
  res.status(200)
})

router.post('/signup',authController.signup, (req, res) => {
 res.status(200).json({ verified: res.locals.status})
  
})

router.post('/login', authController.login, (req, res) => {
  res.status(200).json({ verified: res.locals.status})
   
 })

module.exports = router;