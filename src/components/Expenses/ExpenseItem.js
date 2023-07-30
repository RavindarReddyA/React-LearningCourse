import React, {useState} from "react";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const expenseTitle = props.title;
    const expenseAmount = props.amount;

    const [title, setTitle] = useState(expenseTitle);

    const clickHandler = () => {

      setTitle(title + ' Updated');

    }


  return(
    <Card className='expense-item'>
      <ExpenseDate date = {props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Click here</button>
    </Card>
  ) 
}

export default ExpenseItem;
