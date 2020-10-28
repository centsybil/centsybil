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

// export interface dataType {
//   queryData: string;
//   queryStatistics: string;
// }
