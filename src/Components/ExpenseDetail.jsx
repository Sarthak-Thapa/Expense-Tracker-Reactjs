import React from 'react'

const ExpenseDetail = () => {
  return (
    <div className='flex flex-row justify-between-2 bg-slate-400 p-5 border-red-900 m-4'>
        <div className="flex flex-col text-1xl font-medium mr-7">
            <p className="text-1xl">INCOME</p>
            <span className='text-2xl font-medium text-green-600'>Rs 0.00</span>
        </div>
        <div className="flex flex-col text-1xl font-medium ml-7 ">
            <p className="text-1xl">EXPENSE</p>
            <span className='text-2xl font-medium text-red-500'>Rs 0.00</span>
        </div>

    </div>
  )
}

export default ExpenseDetail