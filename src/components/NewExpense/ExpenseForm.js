import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChnageHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    setShowForm(false);
  };

  const formResetHandler = (event) => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);

  const addExpensesButHandler = () => {
    setShowForm(true);
  };

  return (
    <div>

        {!showForm && 
      <div>
        <div>
          <button type="button" onClick={addExpensesButHandler}>
            Add Expenses
          </button>
        </div> 

      </div>}

{showForm &&

      <form onSubmit={formSubmitHandler} onReset={formResetHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={amountChnageHandler}
              min="0.01"
              step="0.01"
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
              min="2019-01-01"
              max="2023-12-31"
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="reset">Cancel</button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>}
    </div>
  );
}

export default ExpenseForm;
