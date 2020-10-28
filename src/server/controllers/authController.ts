import express from 'express';
const db = require('../db/dbModel');
import { authControllerType } from '../../types.d';

const authController: authControllerType = {

  addUser: (
    req: express.Request,
    res: express.Request,
    next: express.NextFunction
  ) => {
    const { userId, budgetName, budgetMax } = req.body;
    const query: string =
      'INSERT INTO categories (name, amount, userid) VALUES ($1, $2, $3);';
    const values: string[] | number[] = [budgetName, budgetMax, userId];
    db.query(query, values)
      .then(() => {
        // console.log(data.rows)
        // res.locals.categories = data.rows;
        return next();
      })
      .catch((error: string) => {
        next({
          log:
            'Express error handler caught unknown middleware error in catController addCat',
          status: 400,
          message: { err: error },
        });
      });
  },

  verifyUser: (
    req: express.Request,
    res: express.Request,
    next: express.NextFunction
  ) => {
    const { catId, budgetName, budgetMax } = req.body;
    const query: string =
      'UPDATE categories SET name = $1, amount = $2  WHERE catid = $3;';
    const values: string[] | number[] = [budgetName, budgetMax, catId];
    db.query(query, values)
      .then(() => {
        // res.locals.categories = data.rows;
        return next();
      })
      .catch((error: string) => {
        next({
          log:
            'Express error handler caught unknown middleware error in catController addCat',
          status: 400,
          message: { err: error },
        });
      });
  },

  fetchData: (
    req: express.Request,
    res: express.Request,
    next: express.NextFunction
  ) => {
    const { catId } = req.body;
    const query: string =
      'SELECT users.username, categories.catName, categories.catAmount, transactions.name, transactions.amount FROM users  INNER JOIN categories on users.userId = categories.userId INNER JOIN transactions on categories.catId = transactions.catId';
    const values: number[] = [catId];
    db.query(query, values)
      .then(() => {
        // res.locals.categories = data.rows;
        return next();
      })
      .catch((error: string) => {
        next({
          log:
            'Express error handler caught unknown middleware error in catController addCat',
          status: 400,
          message: { err: error },
        });
      });
  },
};

module.exports = authController;