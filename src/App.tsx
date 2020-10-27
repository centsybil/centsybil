import React from 'react';
import BudgetsView from './Components/BudgetsView';
import { BudgetData } from './types';
import dummyData from './dummyData';

function App() {
  return <BudgetsView budgetData={dummyData} />;
}

export default App;
