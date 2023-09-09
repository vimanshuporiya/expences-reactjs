import React,{useState}  from 'react';
import "./App.css";
import NewExp from "./components/newExpences/NewExpense";

import Expenses from "./components/Expense/Expenses";

const DUMMY_EXPENSE = [
  {
    title: "School fee",
    amount: 300,
    date: new Date(2022, 3, 29),
  },
  // {
  //   id: "e2",
  //   title: "Tution fee",
  //   amount: 250,
  //   date: new Date(2022, 3, 24),
  // },
  // {
  //   id: "e3",
  //   title: "House rent",
  //   amount: 200,
  //   date: new Date(2022, 3, 15),
  // },
  // {
  //   id: "e4",
  //   title: "Car maintance",
  //   amount: 150,
  //   date: new Date(2022, 3, 18),
  // },
  // {
  //   id: "e5",
  //   title: " Bike maintance",
  //   amount: 100,
  //   date: new Date(2022, 3, 28),
  // },
  // {
  //   id: "e6",
  //   title: " Books",
  //   amount: 50,
  //   date: new Date(2022, 3, 8),
  // }
];


const App=()=> {
   const [expenses,setExpenses]=useState(DUMMY_EXPENSE);

  const addExpenseHandler =(expense)=>{
    const updatedExpense=[  expense,  ...expenses]
       setExpenses(updatedExpense);
        
      
  };
  return (
    <div>
   
      <NewExp onAddExpense={ addExpenseHandler } />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
