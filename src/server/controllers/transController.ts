import express from 'express';
const db = require('../db/dbModel');
import { transControllerType } from '../../types.d';

const transController: transControllerType = {
  addTrans: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { catId, name, price, date } = req.body;
    const query: string =
      'INSERT INTO transactions (name, amount, catId, date) VALUES ($1, $2, $3, $4);';
    const values: string[] | number[] = [name, price, catId, date];
    db.query(query, values)
      .then(() => {
        // console.log(data.rows)
        // res.locals.categories = data.rows;
        return next();
      })
      .catch((error: string) => {
        next({
          log:
            'Express error handler caught unknown middleware error in transController addCat',
          status: 400,
          message: { err: error },
        });
      });
  },

  updateTrans: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { transId, name, price } = req.body;
    const query: string =
      'UPDATE transactions SET name = $1, amount = $2  WHERE transid = $3;';
    const values: string[] | number[] = [name, price, transId];
    db.query(query, values)
      .then(() => {
        // res.locals.categories = data.rows;
        return next();
      })
      .catch((error: string) => {
        next({
          log:
            'Express error handler caught unknown middleware error in transController addCat',
          status: 400,
          message: { err: error },
        });
      });
  },

  deleteTrans: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { transId } = req.body;
    const query: string = 'DELETE FROM transactions WHERE transId = $1;';
    const values: number[] = [transId];
    db.query(query, values)
      .then(() => {
        // res.locals.categories = data.rows;
        return next();
      })
      .catch((error: string) => {
        next({
          log:
            'Express error handler caught unknown middleware error in transController addCat',
          status: 400,
          message: { err: error },
        });
      });
  },
};

module.exports = transController;
