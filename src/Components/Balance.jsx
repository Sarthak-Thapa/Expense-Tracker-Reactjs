import React from 'react'

const Balance = () => {
  return (
    <div className='flex flex-col'>
        <div className="text-2xl font-medium bg-cyan-600 m-6">
            Expense Tracker
        </div>
        
        <div className="flex flex-col">
            <p className="capitalize font-medium">Your Balance</p>
            <p className="text-3xl font-semibold">Rs 0.00</p>
        </div>
    </div>
  )
}

export default Balance