import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { FaRegTimesCircle } from "react-icons/fa";

const ExpenseList = ({expenses,clearExpense,editExpense,clearItems}) => {
  return (
      <React.Fragment>
          <ul className='list'>
              {expenses.map(expense => {
                return (
                  <ExpenseItem expense={expense} key={expense.id}
                                clearExpense = {clearExpense}
                                editExpense = {editExpense}
                  />
                )
              })}
          </ul>
          {expenses.length > 0 && (
            <button className='btn' onClick={clearItems}>
              목록지우기 <FaRegTimesCircle />
            </button>
          )}
      </React.Fragment>
    
  )
}

export default ExpenseList