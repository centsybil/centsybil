import express from 'express';
const db = require('../db/dbModel');
const path = require('path');
import { catControllerType } from '../../types.d';

const catController: catControllerType = {
  addCat: (
    req: express.Request,
    res: express.Response,
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
          message: { err: 'An error occured' },
        });
      });
  },

  updateCat: (
    req: express.Request,
    res: express.Response,
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
          message: { err: 'An error occured' },
        });
      });
  },

  deleteCat: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { catId } = req.body;
    const query: string =
      'DELETE FROM categories WHERE catId = $1;';
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
          message: { err: 'An error occured' },
        });
      });
  },
};

module.exports = catController;
