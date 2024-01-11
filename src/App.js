import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/Expenses/ExpenseItem';
import Expenses from './Components/Expenses/Expenses';
import { useState } from 'react';

const App=()=> {
  const [expenses,setExpenses]=useState( [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfExpenditure:'Mumbai'
    },
    { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) ,
    locationOfExpenditure:'Pune'},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfExpenditure:'Lucknow'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      locationOfExpenditure:'Delhi'
    },
  ])
  
  return (
   <div>
     <h2>Let's get started!</h2>
   

    <Expenses items={expenses} setExpenses={setExpenses}/>
    
   </div>
  );
}

export default App;
