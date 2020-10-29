import React, { useState } from 'react';
import { BudgetType } from '../types';
import { FiPlus } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import BudgetItem from './BudgetItem';
import AddBudgetItemModal from './AddBudgetItemModal';

interface BudgetPropsType {
  singleBudgetData: BudgetType;
}

function Budget({ singleBudgetData }: BudgetPropsType) {
  const [expanded, setExpanded] = useState(false);
  const budgetItems = singleBudgetData.budgetItems.length
    ? singleBudgetData.budgetItems.map((item) => {
        return <BudgetItem singleItemData={item} />;
      })
    : [];

  const totalSpent = (budget: BudgetType) => {
    return budget.budgetItems.reduce((acc: number, curr) => {
      console.log(curr.price);
      return (acc += curr.price);
    }, 0);
  };

  function colorCalculator(total: number, max: number) {
    const percent = total / max;
    let red = 0;
    let green = 0;
    if (percent >= 0.7) {
      red = 230;
      green = 0;
    }
    if (percent < 0.7) {
      red = 230;
      green = 190;
    }
    // if (percent < 0.6) {
    //   red = 230;
    //   green = 230;
    // }
    if (percent < 0.5) {
      red = 65;
      green = 190;
    }
    if (percent < 0.4) {
      red = 0;
      green = 200;
    }
    return `rgb(${red}, ${green}, 50)`;
  }

  return (
    <>
      <div className='shadow-sm m-3 p-3'>
        <div className='d-flex justify-content-between py-auto'>
          <h2
            className='budget-title flex-grow-1'
            onClick={() => setExpanded(!expanded)}
          >
            {singleBudgetData.budgetName}
          </h2>
          <div className='d-flex'>
            <h3 className='d-inline'>
              <span
                style={{
                  color: colorCalculator(
                    totalSpent(singleBudgetData),
                    singleBudgetData.budgetMax
                  ),
                }}
              >
                ${totalSpent(singleBudgetData)}
              </span>{' '}
              / <span>${singleBudgetData.budgetMax}</span>
            </h3>
            <div style={{ fontSize: '2rem' }} className='ml-2'></div>
          </div>
        </div>
        {expanded && budgetItems}
        {expanded && (
          <AddBudgetItemModal
            budgetName={singleBudgetData.budgetName}
          ></AddBudgetItemModal>
        )}
      </div>
    </>
  );
}

export default Budget;
