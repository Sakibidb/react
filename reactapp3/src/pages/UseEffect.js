import React from 'react'
import { useState, useEffect } from 'react'

export default function UseEffect() {

    const [count, setCount] = useState(0);
    const [person, setPerson] = useState(5);
    useEffect(()=>{
        setPerson(()=>count*2)
    },[count]);
  return (
    <>
    <div className='container'>

        <h1>UseEffect hook Practice</h1>
        <h1>Count = {count}</h1>
        <h1>Person = {person}</h1>

        <button onClick={()=>setCount((c)=>c+1)}>Click Here</button>

    </div>
    </>
  )
}
