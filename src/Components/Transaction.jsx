import React from 'react'

const Transaction = () => {
    const Input =[
        {id:1, type:"text", title: "Name", value:"Enter text"},
        {id:1, type:"number", title: "Text", value:"Enter amount"},
    ];
  return (
    <div>
        <div className="text-2xl mt-3">Add new transaction</div> <hr className='mt-3'/>
        {
                Input.map(({id, type, title, value}) =>(
                    <div key={id} className="flex flex-col">
            <label className='mt-3'>{title}</label>
            <input type={type} className='text-1xl text-black focus:outline-none mt-2 p-1 capitalize placeholder:lowercase' placeholder={value}/>
        </div>
                ))
            }
        
    </div>
  )
}

export default Transaction