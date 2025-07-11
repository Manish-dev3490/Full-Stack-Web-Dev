import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment, Decrement, Reset } from '../Utils/InitialSlice';


// When we use our usedispatch function yeh humko ek function return krta hai hum usme pna reducer function call karte hai aur jab cal krte hai toh wh dispatch direct store ke paas jaata hai aur jo reucer function call hoti hai woh object return krta hai usme likha hota hai konsi slice me jaana hai just like look at the line number 16,17,18 jo bolra hu...because inko humko export kiya slice.actions krke actions inko kuch super powers de deta hai



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