import React from "react";
import ExpForm from './ExpenseForm.js';
import "./NewExpense.css"
const NewExp = (props) =>{  
  const newExpenseDataHandler= (enteredExpenseData)=>{
   const expData= {
      ...enteredExpenseData,
        id:Math.random().toString() 
    }
      props.onAddExpense(expData);
       console.log(expData);
  }
 
  return (
    <div className="new-expense">
      <ExpForm  expenseDataTransfer={newExpenseDataHandler}/>
    </div>
  );
}
export default NewExp;
