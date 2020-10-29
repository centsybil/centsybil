import React from 'react';
import { BudgetItemType } from '../types';

interface BudgetItemPropsType {
  singleItemData: BudgetItemType;
}
function BudgetItem({ singleItemData }: BudgetItemPropsType) {
  function formatDate(dateString: string) {
    let date = new Date(dateString);
    let formattedDate = `${date.getMonth()}/${date.getDate()}`;
    return formattedDate;
  }
  return (
    <div className='d-flex justify-content-between align-items-center shadow-sm py-2 px-4 m-5 rounded'>
      <h2>{formatDate(singleItemData.date)}</h2>
      <h3>{singleItemData.name}</h3>
      <h2>${singleItemData.price}</h2>
    </div>
  );
}

export default BudgetItem;
