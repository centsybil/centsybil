import React from 'react';
import { BudgetType } from '../types';
import { FiPlusCircle } from 'react-icons/fi';
import BudgetItem from './BudgetItem';

interface BudgetPropsType {
  singleBudgetData: BudgetType;
}

function Budget({ singleBudgetData }: BudgetPropsType) {
  const budgetItems = singleBudgetData.budgetItems.map((item) => {
    return <BudgetItem singleItemData={item} />;
  });

  function colorCalculator(total, max) {
    const percent = total / max;
    let red = 0;
    let green = 0;
    if (percent > 0.7) {
      red = 230;
      green = 0;
    }
    if (percent < 0.7) {
      red = 230;
      green = 65;
    }
    if (percent < 0.6) {
      red = 230;
      green = 230;
    }
    if (percent < 0.5) {
      red = 65;
      green = 190;
    }
    if (percent < 0.4) {
      red = 0;
      green = 230;
    }
    return `rgb(${red}, ${green}, 0)`;
  }

  return (
    <>
      <div className='shadow-sm m-3 p-3 d-flex justify-content-between'>
        <h2>{singleBudgetData.budgetName}</h2>
        <h3 className='d-inline'>
          <span
            style={{
              color: colorCalculator(
                singleBudgetData.currTotal,
                singleBudgetData.budgetMax
              ),
            }}
          >
            ${singleBudgetData.currTotal}
          </span>{' '}
          / <span>${singleBudgetData.budgetMax}</span>
        </h3>
      </div>
      {budgetItems}
    </>
  );
}

export default Budget;
