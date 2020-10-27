export interface BudgetItem {
  name: string;
  price: number;
  date: string;
}
export interface Budget {
  budgetName: string;
  budgetMax: number;
  budgetWarning: number;
  currTotal: number;
  budgetItems: BudgetItem[];
}
export interface BudgetData {
  username: string;
  budgetsArr: Budget[];
}
