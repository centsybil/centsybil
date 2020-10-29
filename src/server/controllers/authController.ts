import express from 'express';
const db = require('../db/dbModel');
import { authControllerType } from '../../types.d';
const bcrypt = require('bcrypt');
const saltRounds = 11;

const authController: authControllerType = {
  addUser: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { username, password, name } = req.body;
    bcrypt.hash(password, saltRounds).then((hash: string) => {
      const query: string =
        'INSERT INTO users (name, username, password) VALUES ($1, $2, $3) RETURNING userid;';
      const values: string[] | number[] = [name, username, hash];
      db.query(query, values)
        .then((data: any) => {
          // console.log(data.rows)
          res.locals.userid = data.rows[0]['userid'];
          res.locals.username = username;
          return next();
        })
        .catch((error: string) => {
          next({
            log:
              'Express error handler caught unknown middleware error in authController addUser',
            status: 400,
            message: { err: error },
          });
        });
    });
  },

  verifyUser: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { username, password } = req.body;
    const query: string = 'SELECT * FROM users WHERE username=($1);';
    const values: string[] | number[] = [username];
    db.query(query, values)
      .then((data: any) => {
        if (data.rows.length === 0) {
          res.send('User does not exist. Try again!');
          return next();
        } else {
          const retrievedHash = data.rows[0]['password'];
          
          bcrypt.compare(password, retrievedHash, (error: string, verify:any) => {
            if (verify === true) {
              res.locals.userid = data.rows[0]['userid']
              res.locals.username = username;
              return next();
            } 
            if (error) {
              next({
                log:
                  'Express error handler caught unknown middleware error in authController verifyUser',
                status: 400,
                message: { err: error },
              });
            }
            else {
              res.locals.incorrect = 'Incorrect Password';
              return next();
            }
          });
        }
      })
      .catch((error: string) => {
        next({
          log:
            'Express error handler caught unknown middleware error in authController verifyUser',
          status: 400,
          message: { err: error },
        });
      });
  },

  fetchCat: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (res.locals.incorrect) {
      return next();
    }
    // const { userId } = req.body;
    const query: string =
      'SELECT * FROM categories WHERE userid = $1;';
    const values: number[] = [res.locals.userId];
    db.query(query, values)
      .then((data: any) => {
         res.locals.categories = data.rows;
        return next();
      })
      .catch((error: string) => {
        next({
          log:
            'Express error handler caught unknown middleware error in authController fetchCat',
          status: 400,
          message: { err: error },
        });
      });
  },

  fetchItems: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (res.locals.incorrect) {
      return next();
    }
    // const { userId } = req.body;
    const query: string =
      'SELECT * FROM transactions WHERE userid = $1;';
    const values: number[] = [res.locals.userId];
    db.query(query, values)
      .then((data: any) => {
         res.locals.items = data.rows;
        return next();
      })
      .catch((error: string) => {
        next({
          log:
            'Express error handler caught unknown middleware error in authController fetchItems',
          status: 400,
          message: { err: error },
        });
      });
  }
};

module.exports = authController;
