import React from 'react'
import Balance from './Components/Balance'
import ExpenseDetail from './Components/ExpenseDetail'
import History from './Components/History'
import Transaction from './Components/Transaction'

const App = () => {
  return (
    <div className="flex justify-center items-center">
    <div className=' flex flex-col h-screen max-w-[1000px] bg-gradient-to-br px-32 py-5 text-white from-cyan-600 to-blue-700'>
      <Balance/>
      <ExpenseDetail/>
      <History/>
      <Transaction/>

    </div>
    </div>
  )
}

export default App