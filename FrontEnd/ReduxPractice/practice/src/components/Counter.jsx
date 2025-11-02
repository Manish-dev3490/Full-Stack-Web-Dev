import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment,Decrement,Reset} from '../../Store/Slicer';

function Counter() {
  const count=useSelector((state)=>state.slice1.count);
  const dispatch=useDispatch();
  
  
  return (
    <div>
        <h2>Counter is {count}</h2>
        <button onClick={()=>dispatch(Increment())}>Increase</button>
        <button onClick={()=>dispatch(Decrement())}>Decrease</button>
        <button onClick={()=>dispatch(Reset())}>Reset</button>

    </div>
  )
}

export default Counter