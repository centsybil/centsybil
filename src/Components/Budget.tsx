import React from 'react';
import { BudgetType } from '../types';
import { FiPlusCircle } from 'react-icons/fi';

interface BudgetPropsType {
  singleBudgetData: BudgetType;
}

function Budget({ singleBudgetData }: BudgetPropsType) {
  return (
    <div className='shadow-sm m-3 p-3'>
      <FiPlusCircle style={{ color: 'red', fontSize: '3rem' }}></FiPlusCircle>
      {singleBudgetData.budgetMax}
    </div>
  );
}

export default Budget;
