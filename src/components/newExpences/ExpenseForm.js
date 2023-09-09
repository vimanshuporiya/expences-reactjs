import React, { useState } from "react";
import "./ExpenseForm.css"
const ExpForm = (props) => {
  const [titleEntered, setTitleEntered] = useState("");
  const [amountEntered, setAmountEntered] = useState("");
  const [dateEntered, setDateEntered] = useState("");

  const titlechangeHandler = (event) => {
    setTitleEntered(event.target.value);
  };
  const amountchangeHandler = (event) => {
    setAmountEntered(event.target.value);
  };
  const datechangeHandler = (event) => {
    setDateEntered(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleEntered,
      amount: amountEntered,
      date: new Date(dateEntered)
    }
     props.expenseDataTransfer(expenseData);

    console.log(expenseData);

    setTitleEntered("");
    setAmountEntered("");
    setDateEntered("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" value={titleEntered} onChange={titlechangeHandler}/>
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" value={amountEntered} min="0.01" step="0.01" onChange={amountchangeHandler}/>
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" value={dateEntered} onChange={datechangeHandler} />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpForm;
