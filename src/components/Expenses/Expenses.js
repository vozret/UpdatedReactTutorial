import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div>
      <ExpenseItem
        key={props.id}
        title={props.title}
        amount={props.amount}
        date={props.date}
      ></ExpenseItem>
    </div>
  );
};

export default Expenses;
