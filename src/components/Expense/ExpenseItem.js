import React from "react";

import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "./card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2> {props.title}</h2>

        <div className="expense-item_amount">${props.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
