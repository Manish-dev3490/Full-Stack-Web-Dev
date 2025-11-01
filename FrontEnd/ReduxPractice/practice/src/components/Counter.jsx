import React from 'react'
import { useSelector } from 'react-redux'

function Counter() {
  const count=useSelector((state)=>state.slice1.count)
  return (
    <div>
        <h2>Counter is {count}</h2>
        <button>Increase</button>
        <button>Decrease</button>
        <button>Reset</button>

    </div>
  )
}

export default Counter