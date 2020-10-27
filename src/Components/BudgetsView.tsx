import React from 'react';
import { BudgetData, Budget } from '../types';

interface BudgetsViewProps {
  budgetData: BudgetData;
}

function BudgetsView({ budgetData }: BudgetsViewProps) {
  const budgets = budgetData.budgetsArr.map((budget: Budget) => {
    return <h1>{budget.budgetName}</h1>;
  });
  return <div>{budgets}</div>;
}

export default BudgetsView;
