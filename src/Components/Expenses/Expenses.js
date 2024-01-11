import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title || 'No Title'}
          amount={expense.amount || 0}
          date={expense.date || new Date()}
          id={expense.id}
          items={props.items}
          setExpenses={props.setExpenses}
        />
      ))}
    </Card>
  );
}

export default Expenses;
