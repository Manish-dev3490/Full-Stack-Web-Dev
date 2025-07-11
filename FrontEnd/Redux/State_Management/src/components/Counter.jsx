import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment,Decrement,Reset } from '../Utils/InitialSlice';

function Counter() {

    const count = useSelector((store) => store.slice1.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Count is: {count}</h2>
            <button onClick={() => { dispatch(Increment()) }}>Increase the count</button>
            <button onClick={() => { dispatch(Decrement()) }}>Decrease the count</button>
            <button onClick={() => { dispatch(Reset()) }}>Reset the count</button>

        </div>
    )
}

export default Counter