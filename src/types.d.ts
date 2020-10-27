import { Request, Response, NextFunction } from 'express';
export type MiddlewareFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export interface catController {
  addCat: any;
  updateCat: any;
  deleteCat: any;
}

export interface transController {
  addTrans: any;
  updateTrans: any;
  deleteTrans: any;
}

export interface dataType {
  queryData: string;
  queryStatistics: string;
}
