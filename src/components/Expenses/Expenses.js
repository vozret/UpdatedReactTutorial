import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filteredExpenses = props.expenses.filter(
    // eslint-disable-next-line eqeqeq
    (item) => item.date.getFullYear() == filteredYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    //    const year = props.date.getFullYear();

    // const filteredExpenses = props.expenses.filter(
    //   // eslint-disable-next-line eqeqeq
    //   (item) => item.date.getFullYear() == selectedYear
    // );

    // console.log(filteredExpenses);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
