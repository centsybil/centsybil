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
