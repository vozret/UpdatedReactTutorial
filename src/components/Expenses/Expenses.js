import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const totalExpenses = props.expenses
    .filter(
      // eslint-disable-next-line eqeqeq
      (item) => item.date.getFullYear() == filteredYear
    )
    .map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));

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
        {totalExpenses.length === 0 ? <p>No expenses found</p> : totalExpenses}
      </Card>
    </div>
  );
};

export default Expenses;
