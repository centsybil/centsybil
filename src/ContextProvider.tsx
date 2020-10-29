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

  return (
    <Context.Provider value={{ userData, setUserData, createBudget }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
