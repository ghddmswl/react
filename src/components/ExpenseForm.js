import React from 'react'
import './ExpenseForm.css'
import { FaRegPaperPlane } from "react-icons/fa";

// 함수형 컴포넌트 
const ExpenseForm = ({addCharge,charge,addAmount,amount,expenseSubmit,edit}) => {
  return (
    <form onSubmit={expenseSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor='charge'>지출 항목</label>
          <input type="text" className='form-control'
                             id='charge'
                             name='charge'
                             value={charge}
                             placeholder='예) 주유비'
                             onChange={addCharge}></input>
        </div>
        <div className="form-group">
          <label htmlFor='amount'>비용</label>
          <input type="number" className='form-control'
                               id='amount'
                               name='amount'
                               value={amount}
                               placeholder='예) 50000'
                               onChange={addAmount}></input>
        </div>
      </div>
      <button type="submit" className="btn">
        {edit?'변경':'제출'} <FaRegPaperPlane />
      </button>
    </form>
  )
}

export default ExpenseForm