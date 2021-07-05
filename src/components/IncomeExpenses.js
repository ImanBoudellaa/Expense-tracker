import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
export const IncomeExpenses = () => {

  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction=>transaction.amount)

  const minus = Math.abs(amounts.filter(transaction=>transaction<0).reduce((acc, transaction)=> (acc+=transaction),0)).toFixed(2)
  const plus = amounts.filter(transaction=>transaction>0).reduce((acc, transaction)=> (acc+=transaction),0).toFixed(2)


  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p className="money plus">+${plus}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p className="money minus">-${minus}</p>
    </div>
  </div>
  )
}
