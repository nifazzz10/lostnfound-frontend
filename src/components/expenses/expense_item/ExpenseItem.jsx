import React, { useState } from "react"

import './ExpenseItem.css';
import ExpenseDate from "../expense_date/ExpenseDate";
import Card from "../../ui/Card";
import AlertDialog from "../../founddialogue/Founddialogue";

const ExpenseItem = (props = {}) => {
   console.log(props);
    // const date = new Date(2023, 2, 30).toISOString();
    // const expense = 'March month spending';
    // const amount_spend = 245;
    const { date, title, amount,name,desc,place} = props;
    
     const  [find, setFind] = useState(false);
    const clickHandler = () => {
       setFind('found');
       
       // console.log(title, expense);
    };

   return (
    
       <Card >

           {/* <ExpenseDate  date={date} /> */}
           <div className="expense-item">
            <div className="inline">
                <div className="">
                    <label htmlFor="">Name:</label>
                </div>
                <div>
                <h2>{name}</h2></div>
            </div>
            <div className="inline">
                <div><label htmlFor="">Lost object:</label></div>
                <div><h2> {desc} </h2></div>
            </div>
            <div className="inline">
                <div><label htmlFor="">Desc:</label></div>
                <div><h2> {title} </h2></div>
            </div>
            <div className="inline">
                <div><label htmlFor="">Lost Date:</label></div>
                <div><h2> {date} </h2></div>
            </div>
            <div className="inline">
                <div><label htmlFor="">Mobile Number:</label></div>
                <div><h2> {amount} </h2></div>
            </div>
            <div className="inline">
                <div><label htmlFor="">Place:</label></div>
                <div><h2> {place} </h2></div>
            </div >
            <div className="inline">
        <AlertDialog/>
          
            </div>

           </div>
           
       </Card>
   )
}

export default ExpenseItem;