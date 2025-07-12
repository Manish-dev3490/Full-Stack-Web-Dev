import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment, Decrement, Reset ,IncreWithVal} from '../Utils/InitialSlice';


// When we use our usedispatch function yeh humko ek function return krta hai hum usme pna reducer function call karte hai aur jab cal krte hai toh wh dispatch direct store ke paas jaata hai aur jo reucer function call hoti hai woh object return krta hai usme likha hota hai konsi slice me jaana hai just like look at the line number 16,17,18 jo bolra hu...because inko humko export kiya slice.actions krke actions inko kuch super powers de deta hai



function Counter() {

    const count = useSelector((store) => store.slice1.count);
    const dispatch = useDispatch();


    // we are creating state variables because jab humko koi state buss ek component ke liye chahiye hoti hai toh hum usko global store me nahi banatae local component state variable bana lete hai
    const [num, setnum] = useState(0)

    return (
        <div>
            <h2>Count is: {count}</h2>
            <button onClick={() => { dispatch(Increment()) }}>Increase the count</button>
            <button onClick={() => { dispatch(Decrement()) }}>Decrease the count</button>
            <button onClick={() => { dispatch(Reset()) }}>Reset the count</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <input type="number" value={num} onChange={(e) => setnum(e.target.value)} />
            <button onClick={()=>{dispatch(IncreWithVal(Number(num)))}}>Submit</button>

        </div>
    )
}

export default Counter