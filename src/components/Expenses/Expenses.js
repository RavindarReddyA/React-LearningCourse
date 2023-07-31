import React, { useState } from "react";

import ExpensesChart from "./ExpensesChart";

import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const fileredExpenses = props.expenses.filter((ele) => {
    console.log(ele.date.getFullYear().toString());
    return ele.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
        <ExpensesChart expenses={fileredExpenses}/>
        <ExpensesList filtereditems={fileredExpenses}/>
      </Card>
    </li>
  );
}

export default Expenses;
