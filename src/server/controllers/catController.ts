import express from 'express';
const db = require('../db/dbModel');
const path = require('path');
import { catControllerType } from '../../types';

const catController: catControllerType = {
  addCat: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { id, budgetName, budgetMax } = req.body;
    const query: string =
      'INSERT INTO categories (name, amount) VALUES ($1, $2) RETURNING * WHERE id = $3';
    const values: string[] | number[] = [budgetName, budgetMax, id];
    db.query(query, values)
      .then((data: any) => {
        res.locals.categories = data.rows;
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
    const { id, budgetName, budgetMax } = req.body;
    const query: string =
      'INSERT INTO categories (name, amount) VALUES ($1, $2) RETURNING * WHERE id = $3';
    const values: string[] | number[] = [budgetName, budgetMax, id];
    db.query(query, values)
      .then((data: any) => {
        res.locals.categories = data.rows;
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
    const { id, budgetName, budgetMax } = req.body;
    const query: string =
      'INSERT INTO categories (name, amount) VALUES ($1, $2) RETURNING * WHERE id = $3';
    const values: string[] | number[] = [budgetName, budgetMax, id];
    db.query(query, values)
      .then((data: any) => {
        res.locals.categories = data.rows;
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
