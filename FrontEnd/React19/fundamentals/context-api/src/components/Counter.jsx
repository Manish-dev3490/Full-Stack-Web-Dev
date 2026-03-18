import React from 'react'

function Counter({count,setCount}) {
  return (
    <div>
        <p>i am inside the counter commponent and let me change the value of count : {count}</p>
        <button  onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
    </div>
  )
}

export default Counter