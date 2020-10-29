import React, { useState, createContext } from 'react';
import dummyData from './dummyData';

const Context = createContext();

function ContextProvider(props) {
  const [userData, setUserData] = useState(dummyData);
  const createBudget = (name: string, max: number, budgetWarning: number) => {
    console.log('im here: ', name, max, budgetWarning);
    const budgetObj = {
      budgetName: name,
      budgetMax: max,
      currTotal: 0,
      budgetWarning,
      budgetItems: [],
    };
    const userDataCopy = Object.assign({}, userData);
    userDataCopy.budgetsArr.push(budgetObj);
    console.log(userDataCopy, 'here');
    setUserData(userDataCopy);
  };

  const createBudgetItem = (price: number, name: string, budget: string) => {
    console.log(price, name, budget);
    const today = new Date();
    const budgetItemObj = {
      name,
      price,
      date: today.toString(),
    };
    const userDataCopy = Object.assign({}, userData);
    for (let el of userDataCopy.budgetsArr) {
      if (el.budgetName === budget) {
        el.budgetItems.push(budgetItemObj);
        break;
      }
    }
    setUserData(userDataCopy);
  };

  return (
    <Context.Provider
      value={{ userData, setUserData, createBudget, createBudgetItem }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
