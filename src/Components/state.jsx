import React,{useState} from 'react'
export default function State() {
    const [value,setValue]=useState(0);
    const increase=()=>
    {
        setValue(value+1);
        
    }
    const decrease=()=>
    {
        setValue(value-1)
    }
    const refresh=()=>
    {
        setValue(0)
    }
  return (
    <div className='container'>
        <h2>Count : {value}</h2>
        <button className='btn' onClick={increase} disabled={value===5}>+</button>
        <button className='btn' onClick={decrease} disabled={value===-5}>-</button>
        <button className='btn' onClick={refresh}>0</button>
    </div>
  )
}
