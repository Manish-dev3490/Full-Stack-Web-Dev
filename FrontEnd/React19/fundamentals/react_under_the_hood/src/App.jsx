import { useState } from "react";

export function App(){
    const [count,setCount]=useState(0);

    function increasecount(){
        setCount(count+1);
    }

    function decreasecount(){
        setCount(count -1);
    }
        
    return (
        <>
        <p>This is our counter application</p>
    <h2>counter value is : {count}</h2>
    <button onClick={increasecount}>increase</button>
    <button onClick={decreasecount}>decrease</button>
        </>
    )
}
