import React from 'react'
import './ExpenseItem.css'
import { BiEditAlt } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";

const ExpenseItem = ({expense,clearExpense,editExpense}) => {
    console.log(expense);
    return (
        <li className='item'>
            <div className='info'>
                <span className='expense'>{expense.charge}</span>
                <span className='amount'>{expense.amount}원</span>
            </div>
            <div>
                <button className='edit-btn'
                        onClick={() => editExpense(expense.id)}><BiEditAlt /></button>
                <button className='clear-btn'
                        onClick={() => clearExpense(expense.id)}><BiSolidTrash /></button>
            </div>
        </li>
    )
}

export default ExpenseItem