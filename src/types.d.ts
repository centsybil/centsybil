import { Request, Response, NextFunction } from 'express';
export type MiddlewareFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export interface catControllerType {
  addCat: any;
  updateCat: any;
  deleteCat: any;
}

export interface transControllerType {
  addTrans: any;
  updateTrans: any;
  deleteTrans: any;
}

export interface authControllerType {
  addUser: any;
  verifyUser: any;
  fetchCat: any;
  fetchItems: any;
}


//global error interface
export interface errObj {
  log: string;
  status: number;
  message: { err: string };
}

export interface BudgetItemType {
  name: string;
  price: number;
  date: string;
}

export interface BudgetType {
  budgetName: string;
  budgetMax: number;
  budgetWarning: number;
  currTotal: number;
  budgetItems: BudgetItemType[];
}

export interface BudgetDataType {
  username: string;
  budgetsArr: BudgetType[];
}
