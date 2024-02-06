// 화면 구성
import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import { BiExtension } from "react-icons/bi";


 const App = () => {
//   constructor(props) {
//     super(props);
//     this.state = {
//       expenses : [
//         {id :1, charge:'점심', amount:50000},
//         {id :2, charge:'주유', amount:40000},
//         {id :3, charge:'저녁', amount:23000},
//       ]
//     }
//   }

  const [charge, setCharge] = useState(""); // 항목(문제데이터)
  const [amount, setAmount] = useState(0); // 비용
  const [id, setId] = useState('');
  const [edit, setEdit] = useState(false); // == flag값
  const [alert, setAlert] = useState({show:false});
  const [expenses, setExpenses] = useState([
    {id :1, charge:'점심', amount:50000},
    {id :2, charge:'주유', amount:40000},
    {id :3, charge:'저녁', amount:23000},
  ]);

  const addCharge =  (e) => {
    console.log(e.target.value);
    setCharge(e.target.value);
  }

  const addAmount = (e) => {
    console.log(typeof e.target.valueAsNumber);
    setAmount(e.target.valueAsNumber);
  }

  const editExpense = (id) => {
    const expense = expenses.find(item => item.id === id);
    const {charge, amount} = expense;
    setId(id);
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
  }

  const clearExpense = (id) => {
    const newExpense = expenses.filter(expense => expense.id !== id )
    //console.log(newExpense);
    setExpenses(newExpense);
    handleAlert({type:'danger', text:'항목이 삭제되었습니다.'})
  }
  
  const handleAlert = ({type, text}) => {
    setAlert({show:true,type,text});
    setTimeout(() => {
      setAlert({show:false});
    },7000);
  }

  const expenseSubmit = (e) => {
    e.preventDefault();
    if(charge !== "" && amount > 0) {
      if(edit) {
        const newExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item;
        })
        console.log("newExpenses >> ",  newExpenses)
        setExpenses(newExpenses);
        setEdit(false);
        setAmount(0);
        setCharge('');
        handleAlert({type:'success', text:'수정이 완료되었습니다.'});
      } else {
        const newExpense = {id : crypto.randomUUID(), charge,amount} 
        const newExpenses = [...expenses, newExpense] // ... 지금 상태 가져옴
        
        setExpenses(newExpenses);
        setCharge('');
        setAmount(0);
        handleAlert({type:'success', text:'항목이 추가되었습니다.'})
      }
    }else {
      console.log('error');
      handleAlert({type:'danger', text:'데이터를 입력해주세요.'})
      return false;
    }
  }

  const clearItems = () => {
    setExpenses([]);
  }

    return(
      <main className="main-container">
        {alert.show?<Alert type={alert.type} text={alert.text}/> : null}
        <h1><BiExtension />예산 계산기</h1>
        <div className="box">
          <ExpenseForm addCharge={addCharge}
                       charge={charge}
                       addAmount={addAmount}
                       amount={amount}
                       expenseSubmit={expenseSubmit}
                       edit={edit}

          />

        </div>
        <div className="box">
          <ExpenseList
            editExpense={editExpense}
            expenses={expenses}
            clearExpense={clearExpense}
            clearItems={clearItems}
          />
        </div>
        <div className="box2">
          <p className="t_price">총지출:
            <span>{expenses.reduce((acc, curr)=>{
                    return(acc += curr.amount);
                  },0)
                  }
          원</span>
          </p>
        </div>
      </main>
    )
  }


export default App;