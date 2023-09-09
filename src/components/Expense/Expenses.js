import './Expenses.css';

import ExpenseItem from './ExpenseItem';
 
import Card from './card'; 

const Expenses=(props)=>{
       console.log('items', props.item)
     return(
       <Card className="expenses">
   {
       props.item && props.item.map(
           (expense) =>(
            <ExpenseItem   
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
           )
            )
   }
          </Card>
)
 } 
 export default Expenses;