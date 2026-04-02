import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment, Decrement, Reset } from '../stores/CounterSlice';


function Counter() {
  const countInfo = useSelector((store) => store.CounterSlice.count);
  const dispatch = useDispatch();
  console.log(countInfo);

  return (
    <>
      <p>Value of the counbter is : {countInfo}</p>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>


    </>
  )
}

export default Counter