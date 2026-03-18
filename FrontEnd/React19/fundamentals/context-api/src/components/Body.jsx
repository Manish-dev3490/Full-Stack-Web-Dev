import React from 'react'
import Counter from './Counter'
function Body({count,setCount}) {
  
  return (
    <div>
        <h1>i am inside the body and count is : {}</h1>
        <Counter count={count} setCount={setCount}/>
    </div>
  )
}

export default Body