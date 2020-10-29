import React from 'react';
import { BudgetDataType, BudgetType } from '../types';
import Budget from './Budget';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AddBudgetModal from './AddBudgetModal';

interface BudgetsViewProps {
  budgetData: BudgetDataType;
}

function BudgetsView({ budgetData }: BudgetsViewProps) {
  const budgets = budgetData.budgetsArr.map((budget: BudgetType) => {
    return <Budget singleBudgetData={budget} />;
  });

  return (
    <>
      <div className='container my-4 center shadow p-4'>
        <h1>My Budgets</h1>
        {budgets}
        <AddBudgetModal></AddBudgetModal>
      </div>
    </>
  );
}

export default BudgetsView;
